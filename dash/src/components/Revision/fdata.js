// fdata.js

const flashData = {
    "5": {
      chemistry: {
        "periodic-table": `
  ⚡ Flash Revision: Periodic Properties
  
⚡️ 1. Modern Periodic Law & Table
Modern Law: Properties of elements are periodic functions of their atomic numbers.

Long Form Table: 18 groups, 7 periods.

Blocks:

s-block: Groups 1–2

p-block: Groups 13–18

d-block: Groups 3–12 (Transition)

f-block: Lanthanides & Actinides (Inner-transition)

Periodic Trends follow atomic number ↑, not atomic mass.

⚡️ 2. Effective Nuclear Charge (Zeff)
Zeff = Z − σ (Shielding constant via Slater’s Rule)

Across period: Zeff ↑ ⇒ electrons pulled closer.

Down group: Zeff ↓ slightly, shielding ↑.

⚡️ 3. Atomic & Ionic Radius
Atomic radius:

↓ across period (Zeff ↑)

↑ down group (shells ↑)

Ionic radius:

Cations < parent atom (loss of electrons)

Anions > parent atom (electron repulsion)

Order: Anion > Atom > Cation

⚡️ 4. Ionization Enthalpy (IE)
IE = Energy to remove electron from gaseous atom.

Trend:

↑ across period (Zeff ↑, size ↓)

↓ down group (size ↑)

Exceptions:

Be > B (due to full 2s²)

N > O (half-filled stability)

Successive IE: Always increases.

⚡️ 5. Electron Gain Enthalpy (EGE)
Energy change when atom gains an electron.

Trend:

↑ across period

↓ down group

Exceptions:

F < Cl (F: high e⁻–e⁻ repulsion)

Be, N: EGE ~ zero/positive (stable configurations)

⚡️ 6. Electronegativity (EN)
Tendency to attract shared electrons in a bond.

Fluorine = most EN (4.0, Pauling)

Trend:

↑ across period

↓ down group

Not measurable, depends on scale.

Hybridization effect: sp > sp² > sp³

⚡️ 7. Valency & Oxidation States
Valency = Combining capacity (typically fixed).

Oxidation State = Apparent charge (can vary).

s/p-block:

Group no. = max valency

Group 14 shows +2, +4 (Sn, Pb)

d-block:

Variable oxidation states common

Example: Fe²⁺, Fe³⁺

⚡️ 8. Periodic Trends Summary (Table)
Property	Across Period	Down Group
Atomic Radius	Decreases	Increases
Ionization Energy	Increases	Decreases
Electron Affinity	Increases	Decreases
Electronegativity	Increases	Decreases
Metallic Character	Decreases	Increases
Non-Metallic Nature	Increases	Decreases

✅ Exceptions to Remember:

Be > B (IE)

N > O (IE)

F < Cl (EGE)

Li behaves like Mg

Be like Al

⚡️ 9. Diagonal Relationships
Li–Mg, Be–Al, B–Si

Due to similar:

Ionic size

EN

Charge density

Leads to similar:

Solubility

Thermal behavior

Compound nature

⚡️ 10. Anomalous 2nd Period Behavior
Li, Be, B, N, O, F differ from rest of group due to:

Small size

High EN

No d-orbitals

Examples:

Li forms covalent salts, stable nitride

Be(OH)₂ is amphoteric (not basic)

N forms π-bonds (N≡N), P doesn't

O forms strong H-bonds, S doesn’t

🧪 Must-Know Example Compounds
Element	Compound	Behavior / Reason
Li	LiCl	Covalent, like MgCl₂
Be	Be(OH)₂	Amphoteric (Al-like)
B	BF₃, B₂H₆	Covalent, electron deficient
N	N₂	Triple bond, gas
O	H₂O	Strong hydrogen bonding
F	HF	Weak acid due to H-bond

🔑 Quick Tricks
Zeff ↑ ⇒ IE ↑ ⇒ Radius ↓

Stable configs (filled/half-filled) → High IE

F < Cl (EGE) is a common JEE exception

Diagonal pairs mimic each other more than their own group


  `,

  
  
        "chemical-bonding": `
  ⚡ Flash Revision: Chemical Bonding
  
  Octet Rule: Atoms gain/lose/share electrons to achieve 8 electrons in outer shell.
  
  Ionic Bond: Complete transfer of electrons (e.g., NaCl).
  
  Covalent Bond: Sharing of electrons (e.g., H₂, O₂, CH₄).
  
  Lattice Energy: Energy released when gaseous ions form 1 mole of solid ionic compound. ↑ lattice energy = ↑ stability.
  
  Dipole Moment: Indicates polarity. μ = q × d
  
  Fajan’s Rule: Smaller cation + larger anion = ↑ covalent character in ionic bond.
  
  VSEPR Theory: Predicts molecular shape based on electron pair repulsion.
  
  Hybridization:
  - sp³ = tetrahedral (CH₄)
  - sp² = trigonal planar (BF₃)
  - sp = linear (BeCl₂)
  
  Molecular Orbital Theory: Bonding & antibonding orbitals.
  Bond Order = (Nb - Na)/2
  
  H-bonding: Strong in HF, H₂O, NH₃. Affects boiling point and solubility.
  `,
  
      },
  
      physics: {
        "units-and-measurements": `
  ⚡ Flash Revision: Units and Measurements
  
  Physical Quantities: Measurable properties (e.g., mass, length, time).
  
  Fundamental Units (SI): m, kg, s, A, K, mol, cd
  
  Derived Units: Formed from fundamental units (e.g., m/s, N, J)
  
  Dimensional Formula: Expresses quantity in terms of M, L, T.
  
  Error Analysis:
  - Absolute error = |measured - true value|
  - Relative error = (absolute / true) × 100%
  
  Significant Figures: Digits that carry meaning.
  Rules: All non-zero digits are significant; trailing zeros count if after decimal.
  
  Dimensional Analysis: Used to check correctness and convert units.
  `
      }
    },





  
    "16": {
      chemistry: {
        "the-solid-state": `
  ⚡ Flash Revision: The Solid State
  
  Types of Solids: Ionic, Covalent, Metallic, Molecular
  
  Crystal Lattices: Cubic, FCC, BCC, etc.
  
  Packing Efficiency: FCC > BCC > Simple Cubic
  
  Void Fraction: 1 - Packing Efficiency
  
  Density = (Z × M) / (a³ × NA)
  
  Defects:
  - Stoichiometric (Schottky, Frenkel)
  - Non-stoichiometric
  - Impurity
  
  Conductivity: Metallic & ionic; increases with temperature in ionic solids.
  `
        // Add more Class 12 chapters here...
      }
    }
  };
  
  export default flashData;
  