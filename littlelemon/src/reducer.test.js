import { describe, test, expect } from '@jest/globals';
import { updateTime, initializeTimes } from './components/Main';
describe('initializeTimes', () => {
    test('returns special times for 2025-05-20', () => {
      const result = initializeTimes("2025-05-20");
      expect(result).toEqual(["18:00", "19:00"]);
    });
  
    test('returns default times for any other date', () => {
      const result = initializeTimes("2025-05-19");
      expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    });
  });
  
describe('updateTime reducer', () => {
    test('updates available times for a known special date', () => {
      const initialState = [];
      const action = { type: "UPDATE_TIMES", payload: "2025-05-20" };
      const result = updateTime(initialState, action);
      expect(result).toEqual(["18:00", "19:00"]);
    });
  
    test('updates to default times for other dates', () => {
      const initialState = [];
      const action = { type: "UPDATE_TIMES", payload: "2025-05-19" };
      const result = updateTime(initialState, action);
      expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    });
  
    test('returns current state on unknown action', () => {
      const currentState = ["17:00"];
      const action = { type: "UNKNOWN_ACTION" };
      const result = updateTime(currentState, action);
      expect(result).toBe(currentState);
    });
  });