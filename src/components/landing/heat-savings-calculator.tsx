"use client";

import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Zap, TrendingDown, CalendarCheck } from "lucide-react";

const ELECTRICITY_RATE = 0.127; // $/kWh — San Antonio avg (CPS Energy)
const COOLING_FRACTION = 0.48; // fraction of bill from cooling in SA summer
const SOLAR_HEAT_GAIN_REDUCTION: Record<string, number> = {
    single: 0.42, // single-pane: tint reduces solar gain by 42%
    dual: 0.30,   // dual-pane: 30%
    "low-e": 0.18, // low-e: 18%
};

function calcSavings(sqft: number, windowType: string) {
    // Base cooling cost per sqft per month in SA summer
    const baseCoolingPerSqft = 0.085; // $/sqft/month
    const baseMonthlyCooling = sqft * baseCoolingPerSqft;
    const reduction = SOLAR_HEAT_GAIN_REDUCTION[windowType] || 0.30;
    const monthlySavings = baseMonthlyCooling * reduction;
    const annualSavings = monthlySavings * 7; // ~7 hot months in SA
    const avgTintCost = sqft * 0.65; // rough $/sqft installed
    const paybackMonths = Math.ceil(avgTintCost / monthlySavings);

    return {
        monthly: Math.round(monthlySavings),
        annual: Math.round(annualSavings),
        payback: Math.min(paybackMonths, 36),
    };
}

export default function HeatSavingsCalculator() {
    const [sqft, setSqft] = useState(1800);
    const [windowType, setWindowType] = useState("single");

    const savings = calcSavings(sqft, windowType);

    const handleSliderChange = useCallback((value: number[]) => {
        setSqft(value[0]);
    }, []);

    return (
        <Card className="border-border/60 glass-heavy">
            <CardContent className="pt-6 space-y-6">
                {/* Header */}
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-1">
                        Savings Calculator
                    </p>
                    <h3 className="font-headline text-lg font-bold uppercase tracking-wide">
                        How Much Can You Save?
                    </h3>
                </div>

                {/* Square Footage Slider */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-xs uppercase tracking-wider text-foreground/60">
                            Home / Office Size
                        </label>
                        <span className="font-headline text-primary text-sm font-bold">
                            {sqft.toLocaleString()} sq ft
                        </span>
                    </div>
                    <Slider
                        min={800}
                        max={5000}
                        step={100}
                        value={[sqft]}
                        onValueChange={handleSliderChange}
                        className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_[role=slider]]:shadow-[0_0_8px_hsla(51,100%,50%,0.4)]"
                    />
                    <div className="flex justify-between text-[10px] text-foreground/30 uppercase tracking-wider">
                        <span>800 sqft</span>
                        <span>5,000 sqft</span>
                    </div>
                </div>

                {/* Window Type Select */}
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-foreground/60">
                        Current Windows
                    </label>
                    <Select value={windowType} onValueChange={setWindowType}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="single">Single-Pane (most savings)</SelectItem>
                            <SelectItem value="dual">Dual-Pane</SelectItem>
                            <SelectItem value="low-e">Low-E Glass</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="text-center space-y-1 p-3 rounded-lg bg-background/50 border border-border/40">
                        <TrendingDown className="h-4 w-4 text-primary mx-auto" />
                        <p className="font-headline text-xl font-bold text-primary">
                            ${savings.monthly}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-foreground/40">
                            /month
                        </p>
                    </div>
                    <div className="text-center space-y-1 p-3 rounded-lg bg-background/50 border border-border/40">
                        <Zap className="h-4 w-4 text-primary mx-auto" />
                        <p className="font-headline text-xl font-bold text-primary">
                            ${savings.annual}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-foreground/40">
                            /year
                        </p>
                    </div>
                    <div className="text-center space-y-1 p-3 rounded-lg bg-background/50 border border-border/40">
                        <CalendarCheck className="h-4 w-4 text-primary mx-auto" />
                        <p className="font-headline text-xl font-bold text-primary">
                            {savings.payback}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-foreground/40">
                            mo payback
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <Button
                    asChild
                    className="w-full font-headline uppercase tracking-wider glow-amber-sm hover:glow-amber transition-all duration-300"
                >
                    <a href="#contact">Lock In Your Savings</a>
                </Button>
            </CardContent>
        </Card>
    );
}
