

## Fix Hero Section Spacing

**Problem**: The gap between the tagline ("GRITTY, WILD...") and the Swampocalypse logo is larger than the gap between "COMING SOON" and the logo.

**Current spacing**:
- "COMING SOON" → Logo: `mb-4` (16px)
- Logo → Tagline: `mt-6` (24px)

**Solution**: Change the tagline's margin from `mt-6` to `mt-4` so both gaps are equal at 16px.

---

### Technical Changes

**File: `src/components/HeroSection.tsx`**

Line 20: Change `mt-6` to `mt-4` on the tagline paragraph:

```tsx
// Before
<p className="font-display text-sm md:text-base tracking-[0.3em] text-[#F2E6D8] mt-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">

// After  
<p className="font-display text-sm md:text-base tracking-[0.3em] text-[#F2E6D8] mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
```

This ensures both text elements have identical 16px spacing from the logo image.

