// --- 1. Dataset and Configuration ---

// All 10 Mood Categories consolidated into a single dataset object.
const MOOD_DATASET = {
    "Happy / Joy": "happy, joyful, delighted, cheerful, bright, lively, upbeat, thrilled, ecstatic, excited, content, satisfied, playful, grateful, thankful, radiant, positive, optimistic, inspired, energetic, hopeful, amused, blissful, bubbly, confident, serene, vibrant, elated, sunny, glowing, jubilant, refreshed, warm, loving, affectionate, pleased, proud, calm, balanced, harmonious, smiling, laughing, expressive, sparkly, enthusiastic, eager, spirited, triumphant, empowered, motivated, blessed, fortunate, cherished, encouraged, thrilled, fun, merry, jolly, festive, harmonious, peaceful, relieved, cheerfulhearted, uplifted, giddy, exhilarated, golden, animated, appreciative, fulfilled, strong, brightened, affectionate, wholehearted, trusting, lighthearted, carefree, open, safe, rejuvenated, flourishing, dreaming, hopeful, buoyant, merryhearted, livelyhearted, vibranthearted, invigorated, serenehearted, gratefulhearted, comforted, nurtured, soothed, reassured, trustinghearted, supportive, embracing, passionate, imaginative, creative, growing, blooming, blossoming, uplifted-hearted, enriched, enlightened, optimistic-minded, wonder-filled, curious, fascinated, joyful-hearted, spirited-hearted, encouraged-hearted, hope-filled, beaming, shining, glowing-hearted, excited-hearted, thrilled-hearted, positive-minded, cheerful-minded, confident-hearted, free, relaxed, chill, easygoing, inspired-hearted, upbeat-minded, calm-hearted, lively-minded, sunlit, brilliant, dazzling, refreshed-hearted, affectionate-hearted, supportive-hearted",
    "Sad / Low Mood": "sad, unhappy, down, depressed, gloomy, hopeless, lonely, isolated, heartbroken, miserable, discouraged, disappointed, weary, drained, exhausted, sorrowful, grieving, hurt, teary, abandoned, rejected, lost, empty, hollow, fragile, emotional, aching, despairing, pessimistic, withdrawn, numb, cold, blue, melancholic, broken, shattered, downcast, somber, dark, troubled, overwhelmed, stressed, anxious, worried, uneasy, tense, restless, fatigued, drained, apathetic, spiritless, discouraged, faithless, tearful, suffering, burdened, pressured, hopelesshearted, sadhearted, sorrowladen, unloved, unsupported, misunderstood, devalued, belittled, mistreated, insecure, doubtful, fearful, uncertain, shaky, fragilehearted, hurthearted, wounded, scarred, betrayed, abandonedhearted, lonelyhearted, desolate, despair-filled, ashamed, guilty, remorseful, regretful, powerless, helpless, weak, faint, insecurehearted, emptyhearted, hollowhearted, low-spirited, discouraged-hearted, defeated, crushed, rejectedhearted, sorrow-filled, longing, yearning, mourning, achinghearted, unlively, oppressed, suffocated, trapped, overwhelmedhearted, anxioushearted, pressuredhearted, tensehearted, worriedhearted, stressedhearted, insecure-minded, fearful-minded, sad-minded, depressed-minded, hopeless-minded, foggy, cloudy, shadowed, grey-spirited, faded, dim, spiritlesshearted, tearfilled, shaky-hearted, worn, shatteredhearted",
    "Angry / Frustrated": "angry, furious, irate, enraged, annoyed, irritated, frustrated, bitter, hostile, resentful, offended, agitated, heated, fuming, boiling, mad, outraged, vexed, wrathful, infuriated, tense, sharp, harsh, aggressive, irritatedhearted, impatient, provoked, triggered, offendedhearted, insulted, disrespected, violated, stormy, explosive, rigid, stern, closed, defensive, defiant, stubborn, resistant, offendedminded, sharpminded, short-tempered, fiery, blazing, storming, raging, fierce, tensehearted, spiteful, harshhearted, bitterhearted, rumbling, boilinghearted, agitatedhearted, pressed, pressured, overwhelmed-angry, snapped, gritted, clenched, riled, uptight, wound-up, hostile-minded, volatile, chaotic, turbulent, unstable, sharp-edged, cutting, irritated-mood, storm-hearted, burning, flaming, explosive-hearted, fiery-headed, furious-hearted, annoyed-hearted, irritated-mind, anger-filled, rage-filled, snapping, barking, roaring, bristling, stubborn-minded, hostile-hearted, spiked, venomous, sharp-tongued, unapproachable, resent-filled, bitter-minded, offended-mood, tense-mood, wrathminded, rigid-minded, iron-willed, combative, confrontational, defensive-hearted, argumentative, irritated-soul, storm-souled, hard-souled, fiery-souled, heatedhearted, harsh-spirited, turbulent-hearted",
    "Fear / Anxiety": "fearful, scared, terrified, anxious, nervous, uneasy, shaking, trembling, panicked, worried, troubled, threatened, insecure, alarmed, startled, distressed, cautious, hesitant, unsure, doubtful, uncertain, vulnerable, exposed, fragile, tense, breathless, uneasyhearted, shakenhearted, weakhearted, pressured, overwhelmed, frightened, horrified, petrified, spooked, fearful-minded, shy, timid, restless, disturbed, unsettled, jittery, queasy, cautious-minded, unsafe, alert, defensive, retreating, hiding, ducking, shrinking, withdrawing, frozen, paralyzed, trapped, suffocating, overwhelmed, drowning, pressured-hearted, insecure-hearted, doubtful-hearted, anxious-hearted, uneasy-souled, trembling-souled, quivering, startled-hearted, trembling-hearted, wary, mistrustful, suspicious, uneasy-mind, fear-filled, panic-filled, panic-stricken, fearstruck, uneasy-spirit, worrisome, cautious-hearted, shaken, trembling-mind, frozen-hearted, unsure-hearted, fearful-soul, alarm-filled, terrified-hearted, danger-minded, risk-averse, overly-alert, spooked-hearted, jumpy, hypervigilant, shaky-souled, anxiety-laden, worry-heavy, troubled-hearted, hesitant-hearted, shy-hearted, timid-hearted, overwhelmed-mind, stressed-mind, panic-minded, scared-hearted, fragile-minded, fearful-thoughted, trembling-thoughted",
    "Love / Affection": "love, loving, affectionate, warm, caring, nurturing, compassionate, gentle, soft, tender, embracing, supportive, loyal, devoted, romantic, sweet, kindhearted, affectionate-minded, thoughtful, considerate, devotedhearted, attached, bonded, appreciative, grateful, protective, empathetic, sympathetic, warmhearted, love-filled, affectionate-filled, caringhearted, softhearted, tenderhearted, love-minded, gentlehearted, sweethearted, romantic-hearted, compassionate-hearted, nurturing-hearted, cuddly, hugging, connected, valued, cherished, respected, adored, beloved, treasured, close, united, harmonious, empathy-filled, tenderness-filled, bond-forming, attachedhearted, emotionally-open, receptive, giving, generous, kind-souled, supportive-hearted, trust-filled, openhearted, intimacy-filled, deeply-connected, loving-souled, safe-hearted, comfortable-hearted, emotionally-secure, warm-spirited, affectionate-spirited, intimate, attached-minded, respectful-hearted, trusthearted, intuitive-hearted, kind-souled, soft-souled, gentle-souled, affectionate-soul, warm-soul, tender-minded, friendly-hearted, sweet-souled, romantic-minded, giving-hearted, supportive-soul, trust-souled, lovebound, heartbound, bonded-soul, united-soul, closeness-filled, harmony-filled, connectedhearted",
    "Calm / Peaceful": "calm, peaceful, quiet, still, relaxed, rested, grounded, centered, stable, balanced, focused, clear, mindful, serene, tranquil, soft, gentle, soothing, mellow, breezy, slow, steady, patient, accepting, present, aware, conscious, reflective, thoughtful, undisturbed, easy, chill, smooth, flowing, meditative, composed, unshaken, settled, harmonious, aligned, ordered, calmhearted, serenehearted, peaceful-hearted, gentle-minded, steady-minded, calm-souled, tranquil-souled, cooling, easing, soothing-hearted, warmed, relaxed-hearted, slowhearted, focused-hearted, stable-hearted, easy-spirited, relaxed-mind, centered-minded, mellow-hearted, mindful-hearted, quiet-soul, still-soul, balanced-soul, softened, loosened, unwound, stress-free, harmony-minded, gentle-spirit, quiet-spirit, deep-breathing, easygoing-hearted, simple-hearted, smooth-spirited, peaceful-souled, serene-minded, tranquil-mind, balanced-mind, focused-soul, light-souled, floating, drifting, uncluttered, unworried, unbothered, unwound, neutral, coolheaded, levelheaded, rested-hearted",
    "Confusion / Uncertainty": "confused, lost, unsure, uncertain, puzzled, unclear, foggy, distracted, unfocused, scattered, conflicted, torn, mixed, questioning, doubtful, hesitant, overwhelmed, indecisive, perplexed, baffled, disoriented, muddled, tangled, tangled-minded, fogbrained, clueless, unsure-hearted, questioning-hearted, puzzled-hearted, perplexed-hearted, confused-souled, unsure-soul, doubtful-soul, indecisive-mind, foggyhearted, cloudy-minded, tangled-souled, tornhearted, conflicted-hearted, unsure-thinking, disoriented-heart, wobbly, shaky-thinking, losthearted, drifting-mind, unclear-hearted, uncertain-hearted, mixed-hearted, hesitant-hearted, scattered-hearted, unfocused-hearted, unsure-sense, unknown, undefined, wavering, tentative, shaky-minded, questioning-minded, doubtful-minded, perplexed-mind, puzzled-mind, fog-filled, unclear-thoughted, tangled-thoughted, drifting-thoughted, vague, murky, unfinished, unresolved, unstable-thinking, inconsistent, uncertain-souled, guessing, hypothesizing, reevaluating, reconsidering, redirection-seeking, lost-souled, unsure-spirit, confused-spirit, mixed-spirit, questioning-soul",
    "Motivation": "motivated, driven, focused, determined, ambitious, strong, persistent, resilient, disciplined, courageous, brave, confident, empowered, unstoppable, goal-oriented, productive, energetic, active, enthusiastic, dedicated, committed, powerful, capable, ready, engaged, decisive, intentional, pushing, striving, believing, working, climbing, advancing, improving, building, growing, rising, developing, achieving, succeeding, dedicated, focused, intense, sharp, strategic, purposeful, unstoppable, relentless, bold, aspiring, visionary, uplifted, charged, disciplined, projecting, assertive, strong-willed, will-powered, tactical, crushing, moving, forward-thinking, eager, hungry, passionate, hustling, active-minded, inspired, aiming, engaging, dedicating, empowering, self-driven, confident-hearted, motivated-hearted, deep-focused, goal-driven, fire-hearted, passion-filled, ambition-filled, resilience-filled, heat-driven, challenge-ready, limitless, brave-hearted, courage-filled, push-driven, task-focused, growth-minded, mission-minded, purpose-driven, dream-chasing, ambition-minded, improvement-minded, self-believing, self-trusting, initiative-taking, go-getter, clarity-minded, laser-focused, next-level, developing-minded, rising-hearted, unstoppable-minded, forward-locked, future-minded, energized, activated, purpose-lit, strong-minded, persisting, enduring, grinding, elevating, deep-driven, target-focused, mission-locked, hunger-driven, ambition-fueled, achievement-minded, success-focused, determined-soul, intent-powered, rise-driven, challenge-eager, effort-strong, spirit-driven, improvement-hungry, advancing-minded, growth-powered, discipline-fueled, victory-minded, drive-filled, movement-minded, focused-soul, progress-driven, goal-lit, fire-minded, victory-focused, believing-hearted",
    "Stress": "stressed, overwhelmed, burnt, burned-out, pressured, loaded, tense, tight, tired, exhausted, fatigued, overworked, maxed, strained, chaotic, frazzled, stretched, crushed, rushed, scattered, spinning, panicked, jittery, wired, unsettled, overloaded, shaken, uneasy, disturbed, restless, tense-minded, tense-hearted, stress-filled, pressure-filled, weight-loaded, burdened, tight-chested, compressed, suffocated, breathless, tightened, strained-hearted, strained-minded, on-edge, edgy, noisy-minded, noisy-hearted, mind-heavy, brain-fogged, flooded, jammed, crowded-minded, messy-headed, chaos-filled, breakdown-near, overpushed, overstrained, drained, energy-low, system-overload, multitask-burdened, deadline-hit, cornered, boxed-in, compressed-hearted, fast-beating, anxious-overload, stress-surge, under-pressure, jammed-hearted, jammed-mind, fatigue-driven, panic-driven, rushed-hearted, crowded-heart, pressure-locked, mind-cramped, emotion-packed, frenzied, swamped, stormed, hit-hard, restless-minded, unable-to-focus, suffocating-hearted, overthinking, mind-racing, heart-racing, unsettled-soul, storm-souled, chaotic-energy, unbalanced, tight-wired, bottled-up, fragmented, hyperactive-mind, overloaded-soul, pressured-soul, stressed-soul, overclocked, max-pressure, jam-packed, emotion-stacked, fatigue-packed, task-loaded, schedule-buried, overplanned, double-booked, time-crunched, last-minute, stress-spiked, heat-rising, breath-short, tight-mood, overwhelmed-mood, overpushed-mind, overheated, mental-overload, emotional-overload, head-heavy, mind-tight, pressure-heavy, system-strained, alert-surge, shaking-minded, drowning-hearted, panic-soul, stress-tide, storm-mind, flooded-soul, pressure-spike, mental-crunch, burn-pressure, overbearing, mind-boiling, stress-hurt, crammed-thoughts, overthinking-surge",
    "Neutral": "neutral, okay, fine, regular, normal, alright, balanced, flat, even, steady, unemotional, blank, unmoved, plain, baseline, still, simple, moderate, average, basic, ordinary, usual, standard, fair, typical, routine, consistent, predictable, level, mild, soft, muted, quiet, subtle, unchanged, unsure, unbiased, open, cool, soft-minded, natural, unshaken, soft-spirited, unbothered, undisturbed, unaltered, unreactive, unaffected, middle, in-between, undefined, open-ended, unfiltered, raw, simple-hearted, calm-neutral, gentle-neutral, basic-thought, even-minded, soft-hearted, neutral-hearted, neutral-minded, middle-grounded, centered, still-centered, clean, unattached, free-floating, non-emotional, light, unloaded, easy, soft-soul, calm-soul, quiet-soul, gentle-soul, middle-soul, transparent, mild-hearted, zeroed, leveled, constant, non-reactive, smooth, light-minded, quiet-minded, minimal, softened, unweighted, unpressured, unchanged, moderate-minded, middle-energy, flat-energy, blank-mood, empty-mood, silent-mood, unshaded, simple-soul, easy-spirit, average-state, centered-state, neutral-state, quiet-state, steady-state, calm-state, soft-state, open-state, unchanged-state, middle-mind, middle-heart, unfinished, undecided, uncolored, propertyless, shade-free, emotion-free, smooth-hearted, smooth-minded, plain-hearted, plain-minded, flat-hearted, flat-minded, stable-neutral, uncharged-mood, lightenergy, zero-energy, softenergy, balanced-energy, plainenergy, smoothenergy, transparent-hearted, weightless, free-neutral"
};


const MOOD_LABELS = Object.keys(MOOD_DATASET); // 10 mood categories

// DOM Elements
const textInput = document.getElementById('text-input');
const predictButton = document.getElementById('predict-button');
const moodOutput = document.getElementById('mood-output');
const probabilityOutput = document.getElementById('probability-output');
const loadingIndicator = document.getElementById('loading-indicator');
const progressBar = document.getElementById('training-progress');

// Global map for quick lookup: word -> mood category
let keywordToMoodMap = new Map();


// --- 2. Keyword Mapping Logic (Replaces Tokenizer/Model Training) ---

/**
 * Initializes the keywordToMoodMap for rule-based prediction.
 * Every word in the dataset is mapped to its category.
 */
function createKeywordMap() {
    console.log("Creating keyword map...");
    
    MOOD_LABELS.forEach(label => {
        // Split by comma, trim, lowercase, and filter for valid words
        const words = MOOD_DATASET[label].split(',')
            .map(w => w.trim().toLowerCase())
            .filter(w => w.length > 0);
            
        words.forEach(word => {
            // Map the word to its category. If a word is in multiple categories, 
            // the last one will overwrite, but since the words are mostly unique 
            // phrases, this is fine for a basic rule-based system.
            // For common words, we will prioritize the mood it appears in most often
            // but for simplicity here, we stick to the primary list mapping.
            keywordToMoodMap.set(word, label);
        });
    });

    console.log(`Keyword Map created with ${keywordToMoodMap.size} unique keywords.`);
}


// --- 3. Rule-Based Prediction ---

/**
 * **NEW FUNCTION:** Predicts the mood based on direct keyword matching and scoring.
 * This implements the "go through each word and match" logic.
 */
function predictMoodRuleBased(text) {
    // 1. Tokenize the input text (simplified)
    const tokens = text.toLowerCase().split(/\s+/).filter(w => w.length > 0);

    // 2. Initialize score for each mood category
    const moodScores = new Map();
    MOOD_LABELS.forEach(label => moodScores.set(label, 0));

    let totalKeywordMatches = 0;

    // 3. Score the sentence based on keyword hits
    tokens.forEach(token => {
        const mood = keywordToMoodMap.get(token);
        if (mood) {
            // If the token matches a keyword, increment that mood's score
            moodScores.set(mood, moodScores.get(mood) + 1);
            totalKeywordMatches++;
        }
    });

    // 4. Determine the winner
    let predictedMood = 'Neutral'; // Default if no keywords match
    let maxScore = 0;

    moodScores.forEach((score, mood) => {
        if (score > maxScore) {
            maxScore = score;
            predictedMood = mood;
        }
    });
    
    // 5. Calculate Confidence (Simple proxy: ratio of matching words to total matches)
    // For a single word like "down", maxScore = 1 and totalKeywordMatches = 1, giving 100%.
    const confidence = totalKeywordMatches > 0 ? (maxScore / totalKeywordMatches) : 1; 

    return { 
        predictedMood, 
        confidence 
    };
}


// --- 4. Prediction and UI Logic (Updated) ---

/**
 * Makes a prediction on the user's text input using the rule-based approach.
 */
function predictMood() {
    const text = textInput.value.trim(); // Trim whitespace

    // Validation check for blank input
    if (text.length === 0) {
        moodOutput.textContent = 'Error: Please enter some text to analyze your mood.';
        probabilityOutput.textContent = '';
        textInput.focus();
        return;
    }

    // Use the rule-based prediction
    const { predictedMood, confidence } = predictMoodRuleBased(text);

    // Update UI
    moodOutput.textContent = `"${predictedMood}"`;
    probabilityOutput.textContent = `Confidence: ${(confidence * 100).toFixed(2)}%`;
}


/**
 * Initializes the application: sets up the keyword map.
 */
async function init() {
    predictButton.disabled = true;
    loadingIndicator.style.display = 'block';

    // 1. Create the keyword map (this replaces model loading/training)
    createKeywordMap();

    // 2. Hide loading/training indicators (since there's no training)
    loadingIndicator.style.display = 'none';
    progressBar.value = 100;

    // 3. UI updates for ready state
    moodOutput.textContent = 'Model loaded succesfully';
    predictButton.disabled = false;
    
    // 4. Attach event listener
    predictButton.addEventListener('click', predictMood);
    
    // Note: Since this is rule-based, the old TensorFlow model/vocabulary storage 
    // keys (MODEL_SAVE_KEY, VOCAB_SAVE_KEY) and the TF.js library are no longer needed 
    // for functionality, but they are left in the comments for context.
}

// Start the application setup
document.addEventListener('DOMContentLoaded', init);