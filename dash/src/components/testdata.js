const testData = {
  1: [
    {
      title: " CBSE (Test- 1)",
      questions: [
        // Maths (1–3)
        {
          question: "What is the derivative of x²?",
          options: ["x", "2x", "x²", "None"],
          answer: "2x",
          subject: "Maths",
        },
        {
          question: "∫x dx = ?",
          options: ["x²", "x²/2", "x/2", "2x"],
          answer: "x²/2",
          subject: "Maths",
        },
        {
          question: "Limit of sin(x)/x as x→0 is?",
          options: ["0", "1", "∞", "undefined"],
          answer: "1",
          subject: "Maths",
        },

        // Physics (4–6)
        {
          question: "Unit of Force?",
          options: ["Joule", "Pascal", "Newton", "Watt"],
          answer: "Newton",
          subject: "Physics",
        },
        {
          question: "Speed is scalar or vector?",
          options: ["Scalar", "Vector", "Tensor", "None"],
          answer: "Scalar",
          subject: "Physics",
        },
        {
          question: "Acceleration due to gravity on Earth?",
          options: ["9.8 m/s²", "10 m/s²", "8 m/s²", "None"],
          answer: "9.8 m/s²",
          subject: "Physics",
        },

        // Chemistry (7–9)
        {
          question: "Symbol of Sodium?",
          options: ["S", "Na", "N", "So"],
          answer: "Na",
          subject: "Chemistry",
        },
        {
          question: "Atomic number of Oxygen?",
          options: ["6", "7", "8", "9"],
          answer: "8",
          subject: "Chemistry",
        },
        {
          question: "pH of neutral solution?",
          options: ["0", "7", "14", "1"],
          answer: "7",
          subject: "Chemistry",
        },
      ],
    },
  ],



  2: [
    {
      title: "JEE (Test-1)",
      questions: [
        // Maths (1–7)
        {
          question: "Group A consists of 7 boys and 3 girls, while group B consists of 6 boys and 5 girls. The number of ways, 4 boys and 4 girls can be invited for a picnic if 5 of them must be from group A and the remaining 3 from group B, is equal to:",
          options: ["8575", "8750", "8925", "9100"],
          answer: "8925",
          subject: "Maths"
        },
        {
          question: "Let a = 3î - ĵ + 2k̂, b = a × (2î - k̂) and c = b × k̂. Then the projection of 2ĵ on a is:",
          options: ["14", "2√7", "2√14", "3√7"],
          answer: "2√14",
          subject: "Maths"
        },
        {
          question: "Let f: (0, ∞) → ℝ be differentiable and satisfies x²f′(x) = 2xf(x) + 3, with f(1) = 4. Then 2f(2) is equal to:",
          options: ["23", "19", "29", "39"],
          answer: "39",
          subject: "Maths"
        },
        {
          question: "Let f(x) = (2 - x)/(1 + x), then f(f(x)) = ?",
          options: ["x", "1 - x", "2x/(1 + x)", "1/(1 + x²)"],
          answer: "x",
          subject: "Maths"
        },
        {
          question: "The maximum value of f(x) = sin²x + sin⁴x on [0, π/2] is:",
          options: ["5/4", "1", "√2", "3/2"],
          answer: "5/4",
          subject: "Maths"
        },
        {
          question: "The number of real roots of the equation cos⁻¹(x) = ln(1 + x), x ∈ (0, 1):",
          options: ["0", "1", "2", "3"],
          answer: "1",
          subject: "Maths"
        },
        {
          question: "Let S be the set of all values of λ such that the system of equations x + 2y - 3z = 2, 2x + λy + 5z = 5, 14x + 3y + μz = 33 has infinitely many solutions. Then λ + μ equals:",
          options: ["12", "10", "13", "11"],
          answer: "12",
          subject: "Maths"
        },
  
        // Physics (8–13)
        {
          question: "The function f(x) = log|sin(x)| + log|cos(x)| is defined in how many intervals in (0, 2π)?",
          options: ["2", "6", "4", "8"],
          answer: "8",
          subject: "Physics"
        },
        {
          question: "In an arithmetic progression, if S₄₀ = 1030 and S₁₂ = 57, then S₃₀ - S₁₀ equals:",
          options: ["525", "510", "515", "505"],
          answer: "515",
          subject: "Maths"
        },
        {
          question: "The number of real solutions of x² + 3x + 2 = min(|x - 3|, |x + 2|):",
          options: ["2", "1", "3", "0"],
          answer: "2",
          subject: "Maths"
        },
        {
          question: "If the 30th and 12th terms of (1 + x)²ⁿ⁻¹ have coefficients A and B respectively, and 2A = 5B, then n = ?",
          options: ["19", "20", "21", "22"],
          answer: "21",
          subject: "Maths"
        },
        {
          question: "Let y = y(x) be the solution of dy/dx = (2cosx sin2x - 4 sinx)/2, with y(π/3) = 0. Then y′(π/4) + y(π/4) = ?",
          options: ["0", "1", "2", "3"],
          answer: "1",
          subject: "Maths"
        },
        {
          question: "Let S = ∑ (from n=1 to ∞) of (5 + nα)/7ⁿ. Then α = ?",
          options: ["1", "6", "1/7", "6/7"],
          answer: "6",
          subject: "Maths"
        },
  
        // Chemistry (14–20)
        {
          question: "The number of functions f: {1, 2, ..., 100} → {0, 1} assigning 1 to exactly one value ≤ 98 is:",
          options: ["98", "196", "392", "784"],
          answer: "392",
          subject: "Maths"
        },
        {
          question: "Let e₁ and e₂ be the eccentricities of two hyperbolas with transverse axis product 100√10. If e₁ = √(5/2), and length of latus rectum of first = 15√2, second = 12√5, then 225e₂² = ?",
          options: ["25", "35", "45", "55"],
          answer: "55",
          subject: "Maths"
        },
        {
          question: "Evaluate: ∫[(x² + 2x + 5)/(x⁴ + 2x³ + 5x² + 2x + 1)] dx = log(...). If α + 2β = ?",
          options: ["12", "14", "16", "18"],
          answer: "16",
          subject: "Maths"
        },
        {
          question: "A point moves such that vector r(t) = 5t²î - 5tĵ. Velocity at t = 2s has magnitude and direction:",
          options: ["5√17 m/s, angle tan⁻¹(4) with -Y", "5√17 m/s, angle tan⁻¹(4) with +X", "5√15 m/s, angle tan⁻¹(4) with +X", "5√15 m/s, angle tan⁻¹(4) with -Y"],
          answer: "5√17 m/s, angle tan⁻¹(4) with -Y",
          subject: "Physics"
        },
        {
          question: "The number of stereoisomers for 5-phenylpent-4-en-2-ol is:",
          options: ["2", "3", "4", "5"],
          answer: "4",
          subject: "Chemistry"
        },
        {
          question: "The equation x² + 3x + 2 = min(|x - 3|, |x + 2|) has how many real solutions?",
          options: ["0", "1", "2", "3"],
          answer: "2",
          subject: "Maths"
        },
        {
          question: "Let P be the image of point Q(7, –2, 5) in the line x–1/2 = y+1/3 = z/4. R(5, p, q) lies on this line. What is the square of the area of triangle PQR?",
          options: ["800", "925", "957", "960"],
          answer: "957",
          subject: "Maths"
        },
        {
          question: "Evaluate: ∫[(x² + 2x + 5)/(x⁴ + 2x³ + 5x² + 2x + 1)] dx. If result is log expression of form α + 2β, find α + 2β.",
          options: ["12", "14", "16", "18"],
          answer: "16",
          subject: "Maths"
        },
        {
          question: "Let e₁ and e₂ be the eccentricities of two hyperbolas with latus rectums 15√2 and 12√5 respectively. If product of transverse axes is 100√10 and e₁ = √(5/2), then 225e₂² = ?",
          options: ["25", "35", "45", "55"],
          answer: "55",
          subject: "Maths"
        },
        {
          question: "How many functions f: {1,2,...,100} → {0,1} assign 1 to exactly one value ≤ 98?",
          options: ["98", "196", "392", "784"],
          answer: "392",
          subject: "Maths"
        },
        {
          question: "If y is solution of dy/dx = (2cosx·sin2x - 4sinx)/2 with y(π/3) = 0, then y′(π/4) + y(π/4) = ?",
          options: ["0", "1", "2", "3"],
          answer: "1",
          subject: "Maths"
        },
        {
          question: "A particle's position vector is r(t) = 5t² î - 5t ĵ. What is speed and angle of motion at t = 2s?",
          options: ["5√17 m/s, tan⁻¹4 with -Y", "5√17 m/s, tan⁻¹4 with +X", "5√15 m/s, tan⁻¹4 with +X", "5√15 m/s, tan⁻¹4 with -Y"],
          answer: "5√17 m/s, tan⁻¹4 with -Y",
          subject: "Maths"
        },
        {
          question: "The number of stereoisomers possible for 5-phenylpent-4-en-2-ol is:",
          options: ["2", "3", "4", "5"],
          answer: "4",
          subject: "Chemistry"
        },
  
        // Physics (28–34)
        {
          question: "The temperature of a body in air falls from 40°C to 24°C in 4 min. If air temp is 16°C, its temperature in next 4 min will be:",
          options: ["14°C", "28°C", "42°C", "56°C"],
          answer: "56°C",
          subject: "Physics"
        },
        {
          question: "A solid sphere rolls without slipping. What is ratio of linear KE to rotational KE?",
          options: ["5:2", "4:3", "3:4", "2:5"],
          answer: "5:2",
          subject: "Physics"
        },
        {
          question: "A particle oscillates as x(t) = x₀ sin²(t/2). Which graph represents its KE as a function of x?",
          options: ["Option 1", "Option 2", "Option 3", "Option 4"],
          answer: "Option 4",
          subject: "Physics"
        },
        {
          question: "A solid and hollow sphere of same mass and radius roll down an incline. Which reaches bottom first?",
          options: ["Solid", "Hollow", "Same time", "Solid twice faster"],
          answer: "Solid",
          subject: "Physics"
        },
        {
          question: "Charges q on a rotating ring of radius R with N charges. What is IA – IB for loops A and B?",
          options: ["(2/π)Nqω", "(Nqω)/(π²)", "(2Nqω)/π", "(Nqω)/π"],
          answer: "(2Nqω)/π",
          subject: "Physics"
        },
        {
          question: "Two spheres touch, one uncharged, other 4×10⁻⁸ C. After separation, force = 9×10⁻³ N. Distance?",
          options: ["1 cm", "2 cm", "3 cm", "4 cm"],
          answer: "2 cm",
          subject: "Physics"
        },
        {
          question: "Energy E and momentum p of a body of mass m relate as:",
          options: ["E² = p²c² + m²c⁴", "E² = p²c + mc²", "E = pc + mc", "E = pc + mc²"],
          answer: "E² = p²c² + m²c⁴",
          subject: "Physics"
        },
  
        // Chemistry (35–40)
        {
          question: "In photoelectric effect, which statements are true?",
          options: ["(A), (B), (C)", "(D), (E)", "(A), (C), (E)", "(C), (E)"],
          answer: "(A), (C), (E)",
          subject: "Chemistry"
        },
        {
          question: "Order of increasing wavelength: (A) Microwaves, (B) UV, (C) IR, (D) X-rays",
          options: ["λ3 < λ4 < λ2 < λ1", "λ4 < λ3 < λ1 < λ2", "λ4 < λ3 < λ2 < λ1", "λ4 < λ2 < λ3 < λ1"],
          answer: "λ4 < λ2 < λ3 < λ1",
          subject: "Physics"
        },
        {
          question: "Electron moves straight in magnetic field. Which statement is correct?",
          options: [
            "(A) true, (R) false",
            "(A) false, (R) true",
            "Both true and (R) explains (A)",
            "Both true but (R) does not explain (A)"
          ],
          answer: "Both true and (R) explains (A)",
          subject: "Physics"
        },
        {
          question: "The energy E and momentum p of a moving body of mass m are related by:",
          options: [
            "E² = p²c² + m²c⁴",
            "E² = p²c + mc²",
            "E = pc + mc",
            "E = pc + mc²"
          ],
          answer: "E² = p²c² + m²c⁴",
          subject: "Physics"
        },
        {
          question: "Assertion: In an insulated container, a gas is adiabatically shrunk to half of its initial volume. The temperature of the gas decreases. Reason: Free expansion of an ideal gas is an irreversible and an adiabatic process.",
          options: [
            "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both (A) and (R) are true and (R) is the correct explanation of (A)"
          ],
          answer: "(A) is false but (R) is true",
          subject: "Physics"
        },
        {
          question: "In photoelectric effect, which statements are true?",
          options: [
            "(A), (B), (C)",
            "(D), (E)",
            "(A), (C), (E)",
            "(C), (E)"
          ],
          answer: "(A), (C), (E)",
          subject: "Physics"
        },
        {
          question: "Arrange in ascending order of wavelength (λ): Microwaves (λ₁), UV (λ₂), IR (λ₃), X-rays (λ₄).",
          options: [
            "λ₃ < λ₄ < λ₂ < λ₁",
            "λ₄ < λ₃ < λ₁ < λ₂",
            "λ₄ < λ₃ < λ₂ < λ₁",
            "λ₄ < λ₂ < λ₃ < λ₁"
          ],
          answer: "λ₄ < λ₂ < λ₃ < λ₁",
          subject: "Physics"
        },
        {
          question: "A point's position vector is r(t) = 5t² î - 5t ĵ. What is the velocity at t = 2s?",
          options: [
            "5√17 m/s, angle tan⁻¹4 with -Y",
            "5√17 m/s, angle tan⁻¹4 with +X",
            "5√15 m/s, angle tan⁻¹4 with +X",
            "5√15 m/s, angle tan⁻¹4 with -Y"
          ],
          answer: "5√17 m/s, angle tan⁻¹4 with -Y",
          subject: "Physics"
        },
        {
          question: "Two spheres touch. One has charge 4×10⁻⁸ C, other is uncharged. After touching and separating, force between them is 9×10⁻³ N. Distance between them?",
          options: ["1 cm", "2 cm", "3 cm", "4 cm"],
          answer: "2 cm",
          subject: "Physics"
        },
        {
          question: "Charges are placed on a rotating circle. What is the difference in enclosed current between loop A and B?",
          options: [
            "(2/π)Nqω",
            "(Nqω)/(π²)",
            "(2Nqω)/π",
            "(Nqω)/π"
          ],
          answer: "(2Nqω)/π",
          subject: "Physics"
        },
  
        // Chemistry (48–54)
        {
          question: "When ethane-1,2-diamine is added to NiCl₂, the colour changes are:",
          options: [
            "Green → Pale blue → Blue → Violet",
            "Pale blue → Blue → Violet → Green",
            "Pale blue → Blue → Green → Violet",
            "Violet → Blue → Pale blue → Green"
          ],
          answer: "Green → Pale blue → Blue → Violet",
          subject: "Chemistry"
        },
        {
          question: "Which mixing gives max temp rise?",
          options: [
            "30 mL HCl and 30 mL NaOH",
            "30 mL CH₃COOH and 30 mL NaOH",
            "45 mL CH₃COOH and 25 mL NaOH",
            "50 mL HCl and 20 mL NaOH"
          ],
          answer: "30 mL HCl and 30 mL NaOH",
          subject: "Chemistry"
        },
        {
          question: "Identify correct set of reagents for aromatic substitution reaction:",
          options: [
            "Br₂ | FeBr₃, H₂O(Δ), NaOH",
            "Ac₂O, Br₂, H₂O(Δ), NaOH",
            "H₂SO₄, Ac₂O, Br₂, H₂O(Δ), NaOH",
            "Ac₂O, H₂SO₄, Br₂, NaOH"
          ],
          answer: "H₂SO₄, Ac₂O, Br₂, H₂O(Δ), NaOH",
          subject: "Chemistry"
        },
        {
          question: "Structure of major product of haloalkane + AgCN reaction?",
          options: ["(1)", "(2)", "(3)", "(4)"],
          answer: "(3)",
          subject: "Chemistry"
        },
        {
          question: "Identify compound A in reaction series involving KNO₂ and NH₄OH:",
          options: ["CoS", "MnS", "NiS", "ZnS"],
          answer: "CoS",
          subject: "Chemistry"
        },
        {
          question: "A compound has 54.2% C, 9.2% H, 36.6% O. Molar mass = 132 g/mol. What is molecular formula?",
          options: ["C6H12O6", "C5H10O4", "C4H8O3", "C3H6O2"],
          answer: "C6H12O6",
          subject: "Chemistry"
        },
        {
          question: "Given sp and sp² hybridized carbon atoms in a structure. Find count:",
          options: ["3 and 6", "4 and 6", "4 and 5", "3 and 5"],
          answer: "3 and 5",
          subject: "Chemistry"
        },
        {
          question: "The correct order of set of reagents for a given aromatic conversion is:",
          options: [
            "Br₂ | FeBr₃, H₂O(Δ), NaOH",
            "Ac₂O, Br₂, H₂O(Δ), NaOH",
            "H₂SO₄, Ac₂O, Br₂, H₂O(Δ), NaOH",
            "Ac₂O, H₂SO₄, Br₂, NaOH"
          ],
          answer: "H₂SO₄, Ac₂O, Br₂, H₂O(Δ), NaOH",
          subject: "Chemistry"
        },
        {
          question: "Structure of the major product of the given haloalkane reaction is:",
          options: ["(1)", "(2)", "(3)", "(4)"],
          answer: "(3)",
          subject: "Chemistry"
        },
        {
          question: "In the given reaction, the compound 'A' is:",
          options: ["CoS", "MnS", "NiS", "ZnS"],
          answer: "CoS",
          subject: "Chemistry"
        },
        {
          question: "A compound contains 54.2% C, 9.2% H, 36.6% O. Molar mass = 132 g/mol. Molecular formula is:",
          options: ["C6H12O6", "C5H10O4", "C4H8O3", "C3H6O2"],
          answer: "C6H12O6",
          subject: "Chemistry"
        },
        {
          question: "Number of sp and sp² hybridized carbon atoms respectively in the structure are:",
          options: ["3 and 6", "4 and 6", "4 and 5", "3 and 5"],
          answer: "3 and 5",
          subject: "Chemistry"
        },
        {
          question: "Which of the following groups are activating and ortho/para directing?",
          options: [
            "(A), (C), (D) only",
            "(A) and (C) only",
            "(A) only",
            "(A), (B) and (E) only"
          ],
          answer: "(A), (C) and (D) only",
          subject: "Chemistry"
        },
        {
          question: "Match transition metal ions to magnetic moment: (A) Ti³⁺, (B) V²⁺, (C) Ni²⁺, (D) Sc³⁺",
          options: [
            "(A)-(III), (B)-(I), (C)-(II), (D)-(IV)",
            "(A)-(IV), (B)-(II), (C)-(III), (D)-(I)",
            "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)",
            "(A)-(II), (B)-(IV), (C)-(I), (D)-(III)"
          ],
          answer: "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)",
          subject: "Chemistry"
        },
  
        // Chemistry (68–72)
        {
          question: "Match (A) Adenine, (B) Cytosine, (C) Thymine, (D) Uracil to structure:",
          options: [
            "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)",
            "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
            "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
            "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)"
          ],
          answer: "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
          subject: "Chemistry"
        },
        {
          question: "The heat of formation of SO₂(g) from S and O₂ using reactions with x and y kcal is:",
          options: [
            "2x/y kcal",
            "y – 2x kcal",
            "x + y kcal",
            "2x + y kcal"
          ],
          answer: "y – 2x kcal",
          subject: "Chemistry"
        },
        {
          question: "In a reaction H₂ + I₂ ⇌ 2HI, which graph correctly shows equilibrium attainment?",
          options: ["Graph 1", "Graph 2", "Graph 3", "Graph 4"],
          answer: "Graph 2",
          subject: "Chemistry"
        },
        {
          question: "In Carius method, 0.25g organic compound gives 0.15g AgBr. %Br in compound is (×10⁻¹ %)?",
          options: ["240", "255", "270", "280"],
          answer: "255",
          subject: "Chemistry"
        },
        {
          question: "Observed molar mass of MX₂ = 65.6, normal = 164. Degree of ionisation of MX₂ is:",
          options: ["60%", "65%", "70%", "75%"],
          answer: "75%",
          subject: "Chemistry"
        },
  
        // Chemistry (73–77)
        {
          question: "No. of stereoisomers for 5-phenylpent-4-en-2-ol:",
          options: ["2", "3", "4", "5"],
          answer: "4",
          subject: "Chemistry"
        },
        {
          question: "A hydrocarbon with molar mass 80 g/mol and 90% C has how many degrees of unsaturation?",
          options: ["2", "3", "4", "5"],
          answer: "3",
          subject: "Chemistry"
        },
        {
          question: "Strongest reducing agent among: Cl⁻, Cr, MnO₄⁻, Mn²⁺ based on SRP values:",
          options: ["Cl⁻", "Cr", "MnO₄⁻", "Mn²⁺"],
          answer: "Cr",
          subject: "Chemistry"
        },
        {
          question: "Which orbital has lowest energy?",
          options: ["4s (n=4)", "3px (n=3)", "3dx²–y² (n=3)", "4pz (n=4)"],
          answer: "3px (n=3)",
          subject: "Chemistry"
        },
        {
          question: "Which reagent forms yellow ppt with cobalt salt solution?",
          options: ["KCl", "KNO₂", "HCl", "NH₄OH"],
          answer: "KNO₂",
          subject: "Chemistry"
        },
  
        // Chemistry (78–80)
        {
          question: "Which statement is true for 1st order reaction?",
          options: [
            "I true, II false",
            "Both false",
            "I false, II true",
            "Both true"
          ],
          answer: "I true, II false",
          subject: "Chemistry"
        },
        {
          question: "Which statement about O₃ is correct?",
          options: [
            "I false, II true",
            "Both true",
            "I true, II false",
            "Both false"
          ],
          answer: "I true, II false",
          subject: "Chemistry"
        },
        {
          question: "Identify correct acid-base mixing leading to maximum temp increase:",
          options: [
            "30 mL HCl and 30 mL NaOH",
            "30 mL CH₃COOH and 30 mL NaOH",
            "45 mL CH₃COOH and 25 mL NaOH",
            "50 mL HCl and 20 mL NaOH"
          ],
          answer: "30 mL HCl and 30 mL NaOH",
          subject: "Chemistry"
        },
      ]
    }
  ],



  3: [
    {
      title: "JEE (Test-1)",
      questions: [
        // Maths (1–7)
        {
          question: "Group A consists of 7 boys and 3 girls, while group B consists of 6 boys and 5 girls. The number of ways, 4 boys and 4 girls can be invited for a picnic if 5 of them must be from group A and the remaining 3 from group B, is equal to:",
          options: ["8575", "8750", "8925", "9100"],
          answer: "8925",
          subject: "Maths"
        },
        {
          question: "Let a = 3î - ĵ + 2k̂, b = a × (2î - k̂) and c = b × k̂. Then the projection of 2ĵ on a is:",
          options: ["14", "2√7", "2√14", "3√7"],
          answer: "2√14",
          subject: "Maths"
        },
        {
          question: "Let f: (0, ∞) → ℝ be differentiable and satisfies x²f′(x) = 2xf(x) + 3, with f(1) = 4. Then 2f(2) is equal to:",
          options: ["23", "19", "29", "39"],
          answer: "39",
          subject: "Maths"
        },
        {
          question: "Let f(x) = (2 - x)/(1 + x), then f(f(x)) = ?",
          options: ["x", "1 - x", "2x/(1 + x)", "1/(1 + x²)"],
          answer: "x",
          subject: "Maths"
        },
        {
          question: "The maximum value of f(x) = sin²x + sin⁴x on [0, π/2] is:",
          options: ["5/4", "1", "√2", "3/2"],
          answer: "5/4",
          subject: "Maths"
        },
        {
          question: "The number of real roots of the equation cos⁻¹(x) = ln(1 + x), x ∈ (0, 1):",
          options: ["0", "1", "2", "3"],
          answer: "1",
          subject: "Maths"
        },
        {
          question: "Let S be the set of all values of λ such that the system of equations x + 2y - 3z = 2, 2x + λy + 5z = 5, 14x + 3y + μz = 33 has infinitely many solutions. Then λ + μ equals:",
          options: ["12", "10", "13", "11"],
          answer: "12",
          subject: "Maths"
        },
  
        // Physics (8–13)
        {
          question: "The function f(x) = log|sin(x)| + log|cos(x)| is defined in how many intervals in (0, 2π)?",
          options: ["2", "6", "4", "8"],
          answer: "8",
          subject: "Physics"
        },
        {
          question: "In an arithmetic progression, if S₄₀ = 1030 and S₁₂ = 57, then S₃₀ - S₁₀ equals:",
          options: ["525", "510", "515", "505"],
          answer: "515",
          subject: "Maths"
        },
        {
          question: "The number of real solutions of x² + 3x + 2 = min(|x - 3|, |x + 2|):",
          options: ["2", "1", "3", "0"],
          answer: "2",
          subject: "Maths"
        },
        {
          question: "If the 30th and 12th terms of (1 + x)²ⁿ⁻¹ have coefficients A and B respectively, and 2A = 5B, then n = ?",
          options: ["19", "20", "21", "22"],
          answer: "21",
          subject: "Maths"
        },
        {
          question: "Let y = y(x) be the solution of dy/dx = (2cosx sin2x - 4 sinx)/2, with y(π/3) = 0. Then y′(π/4) + y(π/4) = ?",
          options: ["0", "1", "2", "3"],
          answer: "1",
          subject: "Maths"
        },
        {
          question: "Let S = ∑ (from n=1 to ∞) of (5 + nα)/7ⁿ. Then α = ?",
          options: ["1", "6", "1/7", "6/7"],
          answer: "6",
          subject: "Maths"
        },
  
        // Chemistry (14–20)
        {
          question: "The number of functions f: {1, 2, ..., 100} → {0, 1} assigning 1 to exactly one value ≤ 98 is:",
          options: ["98", "196", "392", "784"],
          answer: "392",
          subject: "Maths"
        },
        {
          question: "Let e₁ and e₂ be the eccentricities of two hyperbolas with transverse axis product 100√10. If e₁ = √(5/2), and length of latus rectum of first = 15√2, second = 12√5, then 225e₂² = ?",
          options: ["25", "35", "45", "55"],
          answer: "55",
          subject: "Maths"
        },
        {
          question: "Evaluate: ∫[(x² + 2x + 5)/(x⁴ + 2x³ + 5x² + 2x + 1)] dx = log(...). If α + 2β = ?",
          options: ["12", "14", "16", "18"],
          answer: "16",
          subject: "Maths"
        },
        {
          question: "A point moves such that vector r(t) = 5t²î - 5tĵ. Velocity at t = 2s has magnitude and direction:",
          options: ["5√17 m/s, angle tan⁻¹(4) with -Y", "5√17 m/s, angle tan⁻¹(4) with +X", "5√15 m/s, angle tan⁻¹(4) with +X", "5√15 m/s, angle tan⁻¹(4) with -Y"],
          answer: "5√17 m/s, angle tan⁻¹(4) with -Y",
          subject: "Physics"
        },
        {
          question: "The number of stereoisomers for 5-phenylpent-4-en-2-ol is:",
          options: ["2", "3", "4", "5"],
          answer: "4",
          subject: "Chemistry"
        },
        {
          question: "The equation x² + 3x + 2 = min(|x - 3|, |x + 2|) has how many real solutions?",
          options: ["0", "1", "2", "3"],
          answer: "2",
          subject: "Maths"
        },
        {
          question: "Let P be the image of point Q(7, –2, 5) in the line x–1/2 = y+1/3 = z/4. R(5, p, q) lies on this line. What is the square of the area of triangle PQR?",
          options: ["800", "925", "957", "960"],
          answer: "957",
          subject: "Maths"
        },
        {
          question: "Evaluate: ∫[(x² + 2x + 5)/(x⁴ + 2x³ + 5x² + 2x + 1)] dx. If result is log expression of form α + 2β, find α + 2β.",
          options: ["12", "14", "16", "18"],
          answer: "16",
          subject: "Maths"
        },
        {
          question: "Let e₁ and e₂ be the eccentricities of two hyperbolas with latus rectums 15√2 and 12√5 respectively. If product of transverse axes is 100√10 and e₁ = √(5/2), then 225e₂² = ?",
          options: ["25", "35", "45", "55"],
          answer: "55",
          subject: "Maths"
        },
        {
          question: "How many functions f: {1,2,...,100} → {0,1} assign 1 to exactly one value ≤ 98?",
          options: ["98", "196", "392", "784"],
          answer: "392",
          subject: "Maths"
        },
        {
          question: "If y is solution of dy/dx = (2cosx·sin2x - 4sinx)/2 with y(π/3) = 0, then y′(π/4) + y(π/4) = ?",
          options: ["0", "1", "2", "3"],
          answer: "1",
          subject: "Maths"
        },
        {
          question: "A particle's position vector is r(t) = 5t² î - 5t ĵ. What is speed and angle of motion at t = 2s?",
          options: ["5√17 m/s, tan⁻¹4 with -Y", "5√17 m/s, tan⁻¹4 with +X", "5√15 m/s, tan⁻¹4 with +X", "5√15 m/s, tan⁻¹4 with -Y"],
          answer: "5√17 m/s, tan⁻¹4 with -Y",
          subject: "Maths"
        },
        {
          question: "The number of stereoisomers possible for 5-phenylpent-4-en-2-ol is:",
          options: ["2", "3", "4", "5"],
          answer: "4",
          subject: "Chemistry"
        },
  
        // Physics (28–34)
        {
          question: "The temperature of a body in air falls from 40°C to 24°C in 4 min. If air temp is 16°C, its temperature in next 4 min will be:",
          options: ["14°C", "28°C", "42°C", "56°C"],
          answer: "56°C",
          subject: "Physics"
        },
        {
          question: "A solid sphere rolls without slipping. What is ratio of linear KE to rotational KE?",
          options: ["5:2", "4:3", "3:4", "2:5"],
          answer: "5:2",
          subject: "Physics"
        },
        {
          question: "A particle oscillates as x(t) = x₀ sin²(t/2). Which graph represents its KE as a function of x?",
          options: ["Option 1", "Option 2", "Option 3", "Option 4"],
          answer: "Option 4",
          subject: "Physics"
        },
        {
          question: "A solid and hollow sphere of same mass and radius roll down an incline. Which reaches bottom first?",
          options: ["Solid", "Hollow", "Same time", "Solid twice faster"],
          answer: "Solid",
          subject: "Physics"
        },
        {
          question: "Charges q on a rotating ring of radius R with N charges. What is IA – IB for loops A and B?",
          options: ["(2/π)Nqω", "(Nqω)/(π²)", "(2Nqω)/π", "(Nqω)/π"],
          answer: "(2Nqω)/π",
          subject: "Physics"
        },
        {
          question: "Two spheres touch, one uncharged, other 4×10⁻⁸ C. After separation, force = 9×10⁻³ N. Distance?",
          options: ["1 cm", "2 cm", "3 cm", "4 cm"],
          answer: "2 cm",
          subject: "Physics"
        },
        {
          question: "Energy E and momentum p of a body of mass m relate as:",
          options: ["E² = p²c² + m²c⁴", "E² = p²c + mc²", "E = pc + mc", "E = pc + mc²"],
          answer: "E² = p²c² + m²c⁴",
          subject: "Physics"
        },
  
        // Chemistry (35–40)
        {
          question: "In photoelectric effect, which statements are true?",
          options: ["(A), (B), (C)", "(D), (E)", "(A), (C), (E)", "(C), (E)"],
          answer: "(A), (C), (E)",
          subject: "Chemistry"
        },
        {
          question: "Order of increasing wavelength: (A) Microwaves, (B) UV, (C) IR, (D) X-rays",
          options: ["λ3 < λ4 < λ2 < λ1", "λ4 < λ3 < λ1 < λ2", "λ4 < λ3 < λ2 < λ1", "λ4 < λ2 < λ3 < λ1"],
          answer: "λ4 < λ2 < λ3 < λ1",
          subject: "Physics"
        },
        {
          question: "Electron moves straight in magnetic field. Which statement is correct?",
          options: [
            "(A) true, (R) false",
            "(A) false, (R) true",
            "Both true and (R) explains (A)",
            "Both true but (R) does not explain (A)"
          ],
          answer: "Both true and (R) explains (A)",
          subject: "Physics"
        },
        {
          question: "The energy E and momentum p of a moving body of mass m are related by:",
          options: [
            "E² = p²c² + m²c⁴",
            "E² = p²c + mc²",
            "E = pc + mc",
            "E = pc + mc²"
          ],
          answer: "E² = p²c² + m²c⁴",
          subject: "Physics"
        },
        {
          question: "Assertion: In an insulated container, a gas is adiabatically shrunk to half of its initial volume. The temperature of the gas decreases. Reason: Free expansion of an ideal gas is an irreversible and an adiabatic process.",
          options: [
            "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both (A) and (R) are true and (R) is the correct explanation of (A)"
          ],
          answer: "(A) is false but (R) is true",
          subject: "Physics"
        },
        {
          question: "In photoelectric effect, which statements are true?",
          options: [
            "(A), (B), (C)",
            "(D), (E)",
            "(A), (C), (E)",
            "(C), (E)"
          ],
          answer: "(A), (C), (E)",
          subject: "Physics"
        },
        {
          question: "Arrange in ascending order of wavelength (λ): Microwaves (λ₁), UV (λ₂), IR (λ₃), X-rays (λ₄).",
          options: [
            "λ₃ < λ₄ < λ₂ < λ₁",
            "λ₄ < λ₃ < λ₁ < λ₂",
            "λ₄ < λ₃ < λ₂ < λ₁",
            "λ₄ < λ₂ < λ₃ < λ₁"
          ],
          answer: "λ₄ < λ₂ < λ₃ < λ₁",
          subject: "Physics"
        },
        {
          question: "A point's position vector is r(t) = 5t² î - 5t ĵ. What is the velocity at t = 2s?",
          options: [
            "5√17 m/s, angle tan⁻¹4 with -Y",
            "5√17 m/s, angle tan⁻¹4 with +X",
            "5√15 m/s, angle tan⁻¹4 with +X",
            "5√15 m/s, angle tan⁻¹4 with -Y"
          ],
          answer: "5√17 m/s, angle tan⁻¹4 with -Y",
          subject: "Physics"
        },
        {
          question: "Two spheres touch. One has charge 4×10⁻⁸ C, other is uncharged. After touching and separating, force between them is 9×10⁻³ N. Distance between them?",
          options: ["1 cm", "2 cm", "3 cm", "4 cm"],
          answer: "2 cm",
          subject: "Physics"
        },
        {
          question: "Charges are placed on a rotating circle. What is the difference in enclosed current between loop A and B?",
          options: [
            "(2/π)Nqω",
            "(Nqω)/(π²)",
            "(2Nqω)/π",
            "(Nqω)/π"
          ],
          answer: "(2Nqω)/π",
          subject: "Physics"
        },
  
        // Chemistry (48–54)
        {
          question: "When ethane-1,2-diamine is added to NiCl₂, the colour changes are:",
          options: [
            "Green → Pale blue → Blue → Violet",
            "Pale blue → Blue → Violet → Green",
            "Pale blue → Blue → Green → Violet",
            "Violet → Blue → Pale blue → Green"
          ],
          answer: "Green → Pale blue → Blue → Violet",
          subject: "Chemistry"
        },
        {
          question: "Which mixing gives max temp rise?",
          options: [
            "30 mL HCl and 30 mL NaOH",
            "30 mL CH₃COOH and 30 mL NaOH",
            "45 mL CH₃COOH and 25 mL NaOH",
            "50 mL HCl and 20 mL NaOH"
          ],
          answer: "30 mL HCl and 30 mL NaOH",
          subject: "Chemistry"
        },
        {
          question: "Identify correct set of reagents for aromatic substitution reaction:",
          options: [
            "Br₂ | FeBr₃, H₂O(Δ), NaOH",
            "Ac₂O, Br₂, H₂O(Δ), NaOH",
            "H₂SO₄, Ac₂O, Br₂, H₂O(Δ), NaOH",
            "Ac₂O, H₂SO₄, Br₂, NaOH"
          ],
          answer: "H₂SO₄, Ac₂O, Br₂, H₂O(Δ), NaOH",
          subject: "Chemistry"
        },
        {
          question: "Structure of major product of haloalkane + AgCN reaction?",
          options: ["(1)", "(2)", "(3)", "(4)"],
          answer: "(3)",
          subject: "Chemistry"
        },
        {
          question: "Identify compound A in reaction series involving KNO₂ and NH₄OH:",
          options: ["CoS", "MnS", "NiS", "ZnS"],
          answer: "CoS",
          subject: "Chemistry"
        },
        {
          question: "A compound has 54.2% C, 9.2% H, 36.6% O. Molar mass = 132 g/mol. What is molecular formula?",
          options: ["C6H12O6", "C5H10O4", "C4H8O3", "C3H6O2"],
          answer: "C6H12O6",
          subject: "Chemistry"
        },
        {
          question: "Given sp and sp² hybridized carbon atoms in a structure. Find count:",
          options: ["3 and 6", "4 and 6", "4 and 5", "3 and 5"],
          answer: "3 and 5",
          subject: "Chemistry"
        },
        {
          question: "The correct order of set of reagents for a given aromatic conversion is:",
          options: [
            "Br₂ | FeBr₃, H₂O(Δ), NaOH",
            "Ac₂O, Br₂, H₂O(Δ), NaOH",
            "H₂SO₄, Ac₂O, Br₂, H₂O(Δ), NaOH",
            "Ac₂O, H₂SO₄, Br₂, NaOH"
          ],
          answer: "H₂SO₄, Ac₂O, Br₂, H₂O(Δ), NaOH",
          subject: "Chemistry"
        },
        {
          question: "Structure of the major product of the given haloalkane reaction is:",
          options: ["(1)", "(2)", "(3)", "(4)"],
          answer: "(3)",
          subject: "Chemistry"
        },
        {
          question: "In the given reaction, the compound 'A' is:",
          options: ["CoS", "MnS", "NiS", "ZnS"],
          answer: "CoS",
          subject: "Chemistry"
        },
        {
          question: "A compound contains 54.2% C, 9.2% H, 36.6% O. Molar mass = 132 g/mol. Molecular formula is:",
          options: ["C6H12O6", "C5H10O4", "C4H8O3", "C3H6O2"],
          answer: "C6H12O6",
          subject: "Chemistry"
        },
        {
          question: "Number of sp and sp² hybridized carbon atoms respectively in the structure are:",
          options: ["3 and 6", "4 and 6", "4 and 5", "3 and 5"],
          answer: "3 and 5",
          subject: "Chemistry"
        },
        {
          question: "Which of the following groups are activating and ortho/para directing?",
          options: [
            "(A), (C), (D) only",
            "(A) and (C) only",
            "(A) only",
            "(A), (B) and (E) only"
          ],
          answer: "(A), (C) and (D) only",
          subject: "Chemistry"
        },
        {
          question: "Match transition metal ions to magnetic moment: (A) Ti³⁺, (B) V²⁺, (C) Ni²⁺, (D) Sc³⁺",
          options: [
            "(A)-(III), (B)-(I), (C)-(II), (D)-(IV)",
            "(A)-(IV), (B)-(II), (C)-(III), (D)-(I)",
            "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)",
            "(A)-(II), (B)-(IV), (C)-(I), (D)-(III)"
          ],
          answer: "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)",
          subject: "Chemistry"
        },
  
        // Chemistry (68–72)
        {
          question: "Match (A) Adenine, (B) Cytosine, (C) Thymine, (D) Uracil to structure:",
          options: [
            "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)",
            "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
            "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
            "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)"
          ],
          answer: "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
          subject: "Chemistry"
        },
        {
          question: "The heat of formation of SO₂(g) from S and O₂ using reactions with x and y kcal is:",
          options: [
            "2x/y kcal",
            "y – 2x kcal",
            "x + y kcal",
            "2x + y kcal"
          ],
          answer: "y – 2x kcal",
          subject: "Chemistry"
        },
        {
          question: "In a reaction H₂ + I₂ ⇌ 2HI, which graph correctly shows equilibrium attainment?",
          options: ["Graph 1", "Graph 2", "Graph 3", "Graph 4"],
          answer: "Graph 2",
          subject: "Chemistry"
        },
        {
          question: "In Carius method, 0.25g organic compound gives 0.15g AgBr. %Br in compound is (×10⁻¹ %)?",
          options: ["240", "255", "270", "280"],
          answer: "255",
          subject: "Chemistry"
        },
        {
          question: "Observed molar mass of MX₂ = 65.6, normal = 164. Degree of ionisation of MX₂ is:",
          options: ["60%", "65%", "70%", "75%"],
          answer: "75%",
          subject: "Chemistry"
        },
  
        // Chemistry (73–77)
        {
          question: "No. of stereoisomers for 5-phenylpent-4-en-2-ol:",
          options: ["2", "3", "4", "5"],
          answer: "4",
          subject: "Chemistry"
        },
        {
          question: "A hydrocarbon with molar mass 80 g/mol and 90% C has how many degrees of unsaturation?",
          options: ["2", "3", "4", "5"],
          answer: "3",
          subject: "Chemistry"
        },
        {
          question: "Strongest reducing agent among: Cl⁻, Cr, MnO₄⁻, Mn²⁺ based on SRP values:",
          options: ["Cl⁻", "Cr", "MnO₄⁻", "Mn²⁺"],
          answer: "Cr",
          subject: "Chemistry"
        },
        {
          question: "Which orbital has lowest energy?",
          options: ["4s (n=4)", "3px (n=3)", "3dx²–y² (n=3)", "4pz (n=4)"],
          answer: "3px (n=3)",
          subject: "Chemistry"
        },
        {
          question: "Which reagent forms yellow ppt with cobalt salt solution?",
          options: ["KCl", "KNO₂", "HCl", "NH₄OH"],
          answer: "KNO₂",
          subject: "Chemistry"
        },
  
        // Chemistry (78–80)
        {
          question: "Which statement is true for 1st order reaction?",
          options: [
            "I true, II false",
            "Both false",
            "I false, II true",
            "Both true"
          ],
          answer: "I true, II false",
          subject: "Chemistry"
        },
        {
          question: "Which statement about O₃ is correct?",
          options: [
            "I false, II true",
            "Both true",
            "I true, II false",
            "Both false"
          ],
          answer: "I true, II false",
          subject: "Chemistry"
        },
        {
          question: "Identify correct acid-base mixing leading to maximum temp increase:",
          options: [
            "30 mL HCl and 30 mL NaOH",
            "30 mL CH₃COOH and 30 mL NaOH",
            "45 mL CH₃COOH and 25 mL NaOH",
            "50 mL HCl and 20 mL NaOH"
          ],
          answer: "30 mL HCl and 30 mL NaOH",
          subject: "Chemistry"
        },
      ]
    }
  ]
  
};

export default testData;







