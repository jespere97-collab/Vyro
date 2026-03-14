import React, { createContext, useContext, useReducer, useCallback, useRef, useEffect, useState } from 'react';
import {
  MomentConfig,
  ActiveMoment,
  CompletedMoment,
  MomentCategory,
  MomentType,
} from '../types/moment';
import { CATEGORY_PRESETS, DEFAULT_ALLOWED_APPS } from '../constants/presets';
import { generateMomentCode } from '../utils/time';

// ── State ──────────────────────────────────────────────────────────────────

interface MomentState {
  draft: MomentConfig;
  active: ActiveMoment | null;
  history: CompletedMoment[];
  joinCode: string | null;
}

const initialDraft: MomentConfig = {
  id: '',
  title: '',
  category: 'dinner',
  durationMinutes: 120,
  type: 'group',
  allowedApps: DEFAULT_ALLOWED_APPS.map((a) => ({ ...a })),
  participants: [],
};

const initialState: MomentState = {
  draft: { ...initialDraft },
  active: null,
  history: [],
  joinCode: null,
};

// ── Actions ────────────────────────────────────────────────────────────────

type Action =
  | { type: 'SET_CATEGORY'; category: MomentCategory }
  | { type: 'SET_DURATION'; minutes: number }
  | { type: 'SET_TYPE'; momentType: MomentType }
  | { type: 'SET_TITLE'; title: string }
  | { type: 'TOGGLE_APP'; appId: string }
  | { type: 'START_MOMENT' }
  | { type: 'END_MOMENT'; phonesUsed: number }
  | { type: 'RESET_DRAFT' };

function reducer(state: MomentState, action: Action): MomentState {
  switch (action.type) {
    case 'SET_CATEGORY': {
      const preset = CATEGORY_PRESETS.find((p) => p.category === action.category);
      return {
        ...state,
        draft: {
          ...state.draft,
          category: action.category,
          title: preset?.label ?? state.draft.title,
          durationMinutes: preset?.defaultDuration ?? state.draft.durationMinutes,
          type: preset?.defaultType ?? state.draft.type,
        },
      };
    }
    case 'SET_DURATION':
      return { ...state, draft: { ...state.draft, durationMinutes: action.minutes } };
    case 'SET_TYPE':
      return { ...state, draft: { ...state.draft, type: action.momentType } };
    case 'SET_TITLE':
      return { ...state, draft: { ...state.draft, title: action.title } };
    case 'TOGGLE_APP':
      return {
        ...state,
        draft: {
          ...state.draft,
          allowedApps: state.draft.allowedApps.map((a) =>
            a.id === action.appId ? { ...a, enabled: !a.enabled } : a
          ),
        },
      };
    case 'START_MOMENT': {
      const now = Date.now();
      const code = state.draft.type === 'group' ? generateMomentCode() : null;
      // Add default group participants for demo purposes
      const participants =
        state.draft.type === 'group'
          ? [
              { id: 'you', name: 'You', isHost: true, phoneUsed: false },
              { id: 'alex', name: 'Alex', isHost: false, phoneUsed: false },
              { id: 'jordan', name: 'Jordan', isHost: false, phoneUsed: false },
              { id: 'sam', name: 'Sam', isHost: false, phoneUsed: false },
            ]
          : [{ id: 'you', name: 'You', isHost: true, phoneUsed: false }];
      return {
        ...state,
        active: {
          ...state.draft,
          id: `moment_${now}`,
          participants,
          startedAt: now,
          endsAt: now + state.draft.durationMinutes * 60 * 1000,
          isPaused: false,
        },
        joinCode: code,
      };
    }
    case 'END_MOMENT': {
      if (!state.active) return state;
      const completed: CompletedMoment = {
        ...state.active,
        endedAt: Date.now(),
        phonesUsed: action.phonesUsed,
        totalParticipants: state.active.participants.length,
      };
      return {
        ...state,
        active: null,
        joinCode: null,
        history: [completed, ...state.history],
      };
    }
    case 'RESET_DRAFT':
      return {
        ...state,
        draft: { ...initialDraft, allowedApps: DEFAULT_ALLOWED_APPS.map((a) => ({ ...a })) },
      };
    default:
      return state;
  }
}

// ── Context ────────────────────────────────────────────────────────────────

interface MomentContextValue {
  state: MomentState;
  setCategory: (c: MomentCategory) => void;
  setDuration: (m: number) => void;
  setMomentType: (t: MomentType) => void;
  setTitle: (t: string) => void;
  toggleApp: (id: string) => void;
  startMoment: () => void;
  endMoment: (phonesUsed?: number) => void;
  resetDraft: () => void;
  remainingMs: number;
}

const MomentContext = createContext<MomentContextValue | null>(null);

export function MomentProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [remainingMs, setRemainingMs] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (state.active) {
      const tick = () => {
        const remaining = state.active!.endsAt - Date.now();
        setRemainingMs(Math.max(0, remaining));
      };
      tick();
      timerRef.current = setInterval(tick, 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    } else {
      setRemainingMs(0);
    }
  }, [state.active]);

  const setCategory = useCallback((c: MomentCategory) => dispatch({ type: 'SET_CATEGORY', category: c }), []);
  const setDuration = useCallback((m: number) => dispatch({ type: 'SET_DURATION', minutes: m }), []);
  const setMomentType = useCallback((t: MomentType) => dispatch({ type: 'SET_TYPE', momentType: t }), []);
  const setTitle = useCallback((t: string) => dispatch({ type: 'SET_TITLE', title: t }), []);
  const toggleApp = useCallback((id: string) => dispatch({ type: 'TOGGLE_APP', appId: id }), []);
  const startMoment = useCallback(() => dispatch({ type: 'START_MOMENT' }), []);
  const endMoment = useCallback((phonesUsed = 0) => dispatch({ type: 'END_MOMENT', phonesUsed }), []);
  const resetDraft = useCallback(() => dispatch({ type: 'RESET_DRAFT' }), []);

  return (
    <MomentContext.Provider
      value={{
        state,
        setCategory,
        setDuration,
        setMomentType,
        setTitle,
        toggleApp,
        startMoment,
        endMoment,
        resetDraft,
        remainingMs,
      }}
    >
      {children}
    </MomentContext.Provider>
  );
}

export function useMoment(): MomentContextValue {
  const ctx = useContext(MomentContext);
  if (!ctx) throw new Error('useMoment must be used within MomentProvider');
  return ctx;
}
