import { describe, expect, test } from "vitest";
import { auditEngine } from "../utils/auditEngine";

describe("Audit Engine Output Testing", () => {

    test("Expected Gemini 5x Plan", () => {
        const userPlan = {
            platform: "Claude",
            plan: "max 20x",
            users: 4,
            price: 200,
            category: "research",
        }

        const result = {
            needToUpdate: true,
            currentPlatform: "Claude",
            currentPlan: "max 20x",
            currentSpend: 800,
            primaryUseCase: "research",
            newSpending: 240,
            recommendedAction: 'Switch to Gemini ultra 5x',
            savings: 560,
            reason: 'Switching from Claude max 20x to Gemini ultra 5x provides similar research capabilities while reducing per-seat liability by $140/mo.'
        }

        expect(auditEngine(userPlan)).toStrictEqual(result);
    });

    test("Optimized Plan Response", () => {

        const userPlan = {
            platform: "anthropic api direct", 
            plan: "1m token", 
            users: 3,
            price: 25, 
            category: "data"
        }

        const result = {
            needToUpdate: false,
            status: "optimized",
            message: "Current plan is highly optimized for your usage."
        }

        expect(auditEngine(userPlan)).toStrictEqual(result);
    });

    test("No Plan Exists", () => {
        const userPlan = {
            platform: "Lovable",
            plan: "pro",
            users: 2,
            price: 20,
            category: "coding"
        }

        expect(auditEngine(userPlan)).toBe(null);
    });

    test("Team Plan Requirement Switch", () => {
        const userPlan = {
            platform: "Cursor",
            plan: "max",
            users: 5,
            price: 60,
            category: "coding",
        }

        const result = {
            needToUpdate: true,
            currentPlatform: "Cursor",
            currentPlan: "max",
            currentSpend: 300,
            primaryUseCase: "coding",
            newSpending: 100,
            recommendedAction: "Switch to ChatGPT business",
            savings: 200,
            reason: "Switching from Cursor max to ChatGPT business provides similar coding capabilities while reducing per-seat liability by $40/mo."
        }

        expect(auditEngine(userPlan)).toStrictEqual(result);
    });

    test("Same Platform Downgrade", () => {
        const userPlan = {
            platform: "Gemini",
            plan: "ultra 20x",
            users: 2,
            price: 100,
            category: "research",
        }

        const result = {
            needToUpdate: true,
            currentPlatform: "Gemini",
            currentPlan: "ultra 20x",
            currentSpend: 200,
            primaryUseCase: "research",
            newSpending: 120,
            recommendedAction: "Switch to Gemini ultra 5x",
            savings: 80,
            reason: "Downgrading from Gemini ultra 20x to ultra 5x saves $80/mo; the current plan carries a premium per-seat cost that is overkill for 2 users."
        }

        expect(auditEngine(userPlan)).toStrictEqual(result);
    });

});



