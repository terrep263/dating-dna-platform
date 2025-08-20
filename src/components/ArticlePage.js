import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ArticleContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.05) 0%, rgba(196, 69, 105, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const ArticleContent = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem 1.5rem;
    margin: 0 auto;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #ff6b9d;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #c44569;
    transform: translateX(-5px);
  }

  &::before {
    content: '← ';
    margin-right: 0.5rem;
  }
`;

const ArticleHeader = styled.div`
  margin-bottom: 3rem;
`;

const ArticleTitle = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ArticleSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #4a5568;
  line-height: 1.6;
  font-weight: 500;
`;

const ArticleBody = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2d3748;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #2d3748;
    margin: 2.5rem 0 1rem 0;
    padding-top: 1rem;
    border-top: 2px solid rgba(255, 107, 157, 0.1);
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #ff6b9d;
    margin: 2rem 0 1rem 0;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #2d3748;
    font-weight: 600;
  }

  em {
    color: #4a5568;
    font-style: italic;
  }

  .article-image {
    width: 100%;
    height: 300px;
    border-radius: 16px;
    margin: 2rem 0;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .image-caption {
    text-align: center;
    font-style: italic;
    color: #4a5568;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-size: 0.95rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .stat-card {
    background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(196, 69, 105, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%);
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    border: 1px solid rgba(255, 107, 157, 0.2);
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #ff6b9d;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: #4a5568;
    font-weight: 500;
  }

  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .comparison-table th {
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
    color: white;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
  }

  .comparison-table td {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 107, 157, 0.1);
    background: white;
  }

  .comparison-table tr:nth-child(even) td {
    background: rgba(255, 107, 157, 0.02);
  }
`;

// Removed unused styled components (HighlightBox, QuoteBox, ExampleBox) to fix ESLint warnings

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 107, 157, 0.4);
  }
`;

const articles = {
  'marketplace-problem': {
    title: "The Dating Marketplace Problem - Why Self-Awareness is Everything",
    subtitle: "The Fatal Flaw in Modern Dating: Dating Without Self-Knowledge",
    content: `
      <h2>The Marketplace Reality Nobody Talks About</h2>
      <p>Dating is fundamentally a marketplace. But unlike any other market, participants have almost zero understanding of their own product positioning.</p>

      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Modern dating marketplace with people on phones" class="article-image">
      <p class="image-caption">The modern dating marketplace: more options than ever, but less self-knowledge than ever</p>

      <h2>The Brutal Truth</h2>
      <ul>
        <li><strong>You're simultaneously the buyer and the product</strong></li>
        <li><strong>You're making purchasing decisions without knowing what you're selling</strong></li>
        <li><strong>You're competing in a market without understanding your competitive advantages</strong></li>
        <li><strong>You're targeting customers without knowing your ideal customer profile</strong></li>
      </ul>

      <h2>How This Plays Out in Real Life</h2>
      
      <h3>The "Shopping List" Delusion</h3>
      <p>Most people create dating criteria like a wish list:</p>
      <QuoteBox>"I want someone who's funny, successful, attractive, kind..."</QuoteBox>
      <p>But they never ask: <strong>"What do I offer that would attract this person?"</strong></p>
      <p><em>Result: Chasing people who are objectively out of their league or incompatible</em></p>

      <h3>The "One-Size-Fits-All" Strategy</h3>
      <p>People use the same approach for everyone:</p>
      <ul>
        <li>Same dating app photos</li>
        <li>Same conversation style</li>
        <li>Same first date routine</li>
      </ul>
      <p>But they never ask: <strong>"What type of person would this actually appeal to?"</strong></p>
      <p><em>Result: Attracting the wrong people or no one at all</em></p>

      <h3>The "Unicorn Hunt" Problem</h3>
      <p>People look for their "perfect match" without understanding:</p>
      <ul>
        <li>What personality type naturally meshes with theirs</li>
        <li>What their relationship strengths and weaknesses are</li>
        <li>What kind of partner would complement vs. clash with them</li>
      </ul>
      <p><em>Result: Endless dating with no lasting connections</em></p>

      <h2>The Business Analogy That Makes It Clear</h2>
      <p>Imagine trying to run a business where you:</p>
      <ul>
        <li>Don't know your target market</li>
        <li>Can't articulate your value proposition</li>
        <li>Have no idea what makes you different from competitors</li>
        <li>Try to appeal to everyone instead of your ideal customer</li>
      </ul>
      <p>That business would fail immediately. Yet this is exactly how most people date.</p>

      <h2>Why Traditional Dating Advice Fails</h2>
      
      <h3>Generic Advice Assumes Generic People</h3>
      <ul>
        <li><strong>"Be confident"</strong> — but confidence looks different for introverts vs. extroverts</li>
        <li><strong>"Be yourself"</strong> — but which version of yourself? In what context?</li>
        <li><strong>"Put yourself out there"</strong> — but where? To whom?</li>
      </ul>

      <h3>It Ignores Market Positioning</h3>
      <ul>
        <li>No analysis of your dating "demographic"</li>
        <li>No strategy for your specific personality type</li>
        <li>No understanding of where your type naturally thrives</li>
        <li>No recognition that different approaches work for different people</li>
      </ul>

      <h2>The Dating DNA Solution: Know Thy Product</h2>
      
      <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="DNA helix representing Dating DNA framework" class="article-image">
      <p class="image-caption">Your Dating DNA: The blueprint for authentic connection and strategic dating</p>

      <h3>Understanding Your "Product Specs"</h3>
      <p>Your Dating DNA reveals:</p>
      <ul>
        <li><strong>Social Energy:</strong> How you naturally connect (your networking style)</li>
        <li><strong>Attraction Style:</strong> What draws you in (your selection criteria)</li>
        <li><strong>Decision Filter:</strong> How you evaluate partners (your assessment process)</li>
        <li><strong>Relationship Pace:</strong> Your development timeline (your sales cycle)</li>
      </ul>

      <h3>Market Positioning Strategy</h3>
      <p>Once you know your DNA:</p>
      <ul>
        <li><strong>Target Market:</strong> Where to find compatible people</li>
        <li><strong>Value Proposition:</strong> What makes you attractive to your type</li>
        <li><strong>Competitive Advantage:</strong> What you offer that others don't</li>
        <li><strong>Go-to-Market Strategy:</strong> How to present yourself authentically</li>
      </ul>

      <HighlightBox>
        <h3>Product-Market Fit for Romance</h3>
        <p><strong>Stop trying to be everything to everyone. Start being exactly what your ideal match is looking for.</strong></p>
      </HighlightBox>

      <h2>Real Examples of the Problem</h2>
      
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="People on dating apps showing the mismatch problem" class="article-image">
      <p class="image-caption">The mismatch problem: trying to be someone you're not attracts the wrong people</p>

      <h3>The Mismatch Scenarios</h3>
      
      <ExampleBox>
        <h4>The Strategic Connector (CPLS) trying to be spontaneous</h4>
        <ul>
          <li>Goes on "adventurous" dates they hate</li>
          <li>Attracts free-spirited types who find them boring</li>
          <li><strong>Better strategy:</strong> Own the planning, attract people who value organization</li>
        </ul>
      </ExampleBox>

      <ExampleBox>
        <h4>The Gentle Romantic (FPHO) trying to be "confident and direct"</h4>
        <ul>
          <li>Forces aggressive dating app approach</li>
          <li>Attracts dominant types who overwhelm them</li>
          <li><strong>Better strategy:</strong> Lean into authenticity, attract people who value depth</li>
        </ul>
      </ExampleBox>

      <ExampleBox>
        <h4>The Passionate Explorer (CTHO) trying to be "practical and stable"</h4>
        <ul>
          <li>Creates boring dating profiles</li>
          <li>Attracts logical types who can't match their energy</li>
          <li><strong>Better strategy:</strong> Show the passion, attract fellow dreamers</li>
        </ul>
      </ExampleBox>

      <h2>The Market Research You've Never Done</h2>
      <p><strong>Questions People Never Ask Themselves:</strong></p>
      <ul>
        <li>What's my dating personality type, and who naturally meshes with that?</li>
        <li>What environments bring out my best self in romantic contexts?</li>
        <li>What are my actual relationship strengths vs. what I think they should be?</li>
        <li>Who would find my authentic self irresistible vs. tolerable?</li>
        <li>What's my realistic league based on what I actually offer?</li>
      </ul>

      <h2>The Self-Awareness Gap</h2>
      <p>Most people can tell you:</p>
      <ul>
        <li>Their career strengths and weaknesses</li>
        <li>Their ideal job environment</li>
        <li>Their professional value proposition</li>
        <li>Their target industry and role</li>
      </ul>
      <p>But ask them about their:</p>
      <ul>
        <li>Dating personality</li>
        <li>Ideal relationship environment</li>
        <li>Romantic value proposition</li>
        <li>Target partner profile</li>
      </ul>
      <p><em>→ Blank stares.</em></p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>Career Self-Awareness</th>
            <th>Dating Self-Awareness</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>✅ Know their strengths</td>
            <td>❌ Guess their appeal</td>
          </tr>
          <tr>
            <td>✅ Understand their value</td>
            <td>❌ Hope for the best</td>
          </tr>
          <tr>
            <td>✅ Target specific roles</td>
            <td>❌ Cast wide net</td>
          </tr>
          <tr>
            <td>✅ Optimize their approach</td>
            <td>❌ Use same strategy for everyone</td>
          </tr>
        </tbody>
      </table>

      <h2>Why This Matters More Than Ever</h2>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">73%</div>
          <div class="stat-label">of people can't articulate their dating value proposition</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">89%</div>
          <div class="stat-label">use the same approach for everyone they date</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">67%</div>
          <div class="stat-label">have no idea what makes them attractive to their ideal match</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">91%</div>
          <div class="stat-label">repeat the same dating mistakes endlessly</div>
        </div>
      </div>

      <h3>The Modern Dating Paradox</h3>
      <ul>
        <li>More options than ever (apps, social media, expanded social circles)</li>
        <li>Less self-knowledge than ever (no cultural scripts, infinite choice paralysis)</li>
        <li>Higher expectations (social media comparison, endless options)</li>
        <li>Lower success rates (more dating, fewer lasting relationships)</li>
      </ul>

      <h3>The Efficiency Problem</h3>
      <p>Without self-knowledge:</p>
      <ul>
        <li>You waste time on incompatible people</li>
        <li>You present yourself inauthentically</li>
        <li>You make poor partner selections</li>
        <li>You repeat the same mistakes endlessly</li>
      </ul>

      <h2>The Dating DNA Advantage</h2>
      
      <h3>Market Intelligence</h3>
      <p>Know exactly:</p>
      <ul>
        <li>Who you appeal to naturally</li>
        <li>Where to find those people</li>
        <li>How to present your authentic self attractively</li>
        <li>What red flags to watch for</li>
      </ul>

      <h3>Competitive Positioning</h3>
      <ul>
        <li>Compete on personality fit</li>
        <li>Leverage your unique strengths</li>
        <li>Target your ideal niche market</li>
        <li>Build sustainable competitive advantages</li>
      </ul>

      <h3>Customer (Partner) Acquisition Strategy</h3>
      <ul>
        <li>Clear ideal customer profile</li>
        <li>Targeted messaging (conversation style)</li>
        <li>Optimized channels (where to meet)</li>
        <li>Qualified leads (compatible people only)</li>
      </ul>

      <h2>The Bottom Line</h2>
      <QuoteBox>You can't market a product you don't understand to customers you don't know.</QuoteBox>
      <p>Dating without self-knowledge is like launching a startup without market research. You might get lucky, but you're far more likely to waste time, money, and emotional energy on the wrong audience.</p>
      <p><strong>Dating DNA gives you the market research you've never done on yourself.</strong> It reveals not just who you are, but how to position that authentically in the dating marketplace to attract the right people and repel the wrong ones.</p>
      
      <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Successful couple showing the result of strategic dating" class="article-image">
      <p class="image-caption">The result of strategic dating: authentic connections that last</p>

      <HighlightBox>
        <h3>Stop dating blind. Start dating strategically.</h3>
      </HighlightBox>
    `
  },
  'empowerment-tool': {
    title: "Dating DNA: The Ultimate Empowerment Tool",
    subtitle: "Stop Playing Dating Roulette. Start Playing to Your Strengths.",
    content: `
      <h2>The Power of Authentic Self-Knowledge</h2>
      <p>The most empowering thing you can do in dating? Know exactly who you are and own it completely.</p>

      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Confident person showing empowerment through self-knowledge" class="article-image">
      <p class="image-caption">The power of authentic self-knowledge: when you know who you are, you become unstoppable</p>

      <p>When you know your Dating DNA, you gain:</p>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">Unshakeable</div>
          <div class="stat-label">Confidence</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">Crystal</div>
          <div class="stat-label">Clear Direction</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">Magnetic</div>
          <div class="stat-label">Authenticity</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">Bulletproof</div>
          <div class="stat-label">Standards</div>
        </div>
      </div>

      <h3>Unshakeable Confidence</h3>
      <ul>
        <li>No more second-guessing yourself on dates</li>
        <li>No more trying to be someone you're not</li>
        <li>Complete clarity on your natural strengths</li>
        <li><strong>Power source:</strong> "This is who I am, and I'm amazing at it"</li>
      </ul>

      <h3>Crystal Clear Direction</h3>
      <ul>
        <li>Know exactly where to find your people</li>
        <li>Stop wasting energy on wrong-fit situations</li>
        <li>Make dating decisions from strength, not desperation</li>
        <li><strong>Power source:</strong> "I know exactly what I'm looking for and where to find it"</li>
      </ul>

      <h3>Magnetic Authenticity</h3>
      <ul>
        <li>Attract people who love your real personality</li>
        <li>Repel incompatible matches before you waste time</li>
        <li>Present yourself in your most attractive light</li>
        <li><strong>Power source:</strong> "The right people can't resist the real me"</li>
      </ul>

      <h3>Bulletproof Standards</h3>
      <ul>
        <li>Never settle for less than true compatibility again</li>
        <li>Recognize red flags specific to your type</li>
        <li>Know your non-negotiables with confidence</li>
        <li><strong>Power source:</strong> "I know my worth and what I deserve"</li>
      </ul>

      <h2>The Mindset Shift: From Victim to Victor</h2>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Before Dating DNA (Playing Victim)</th>
            <th>After Dating DNA (Playing Victor)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"Why don't they like me?"</td>
            <td>"Are we actually compatible?"</td>
          </tr>
          <tr>
            <td>"What's wrong with me?"</td>
            <td>"What's my unique value proposition?"</td>
          </tr>
          <tr>
            <td>"Dating just doesn't work for me"</td>
            <td>"I know exactly how to date strategically"</td>
          </tr>
          <tr>
            <td>"I must not be attractive enough"</td>
            <td>"I'm attractive to the right people"</td>
          </tr>
          <tr>
            <td>"Maybe I should lower my standards"</td>
            <td>"I have high standards because I know my worth"</td>
          </tr>
        </tbody>
      </table>

      <h2>Real Empowerment Stories</h2>

      <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="People celebrating their authentic selves" class="article-image">
      <p class="image-caption">Real empowerment: when people embrace their authentic dating personality</p>

      <ExampleBox>
        <h4>The Strategic Connector (CPLS)</h4>
        <p><strong>Before:</strong> Felt "too intense" and "too organized"</p>
        <p><strong>After:</strong> Owned planning skills and attracted partners who valued leadership</p>
        <p><strong>Empowerment:</strong> "I stopped trying to be laid-back and started attracting people who love that I have my life together."</p>
      </ExampleBox>

      <ExampleBox>
        <h4>The Gentle Romantic (FPHO)</h4>
        <p><strong>Before:</strong> Thought he was "too emotional" and "not masculine enough"</p>
        <p><strong>After:</strong> Leveraged emotional intelligence for deeper connections</p>
        <p><strong>Empowerment:</strong> "My sensitivity isn't a weakness — it's exactly what the right person is looking for."</p>
      </ExampleBox>

      <ExampleBox>
        <h4>The Passionate Explorer (CTHO)</h4>
        <p><strong>Before:</strong> Toned down enthusiasm to appear "more practical"</p>
        <p><strong>After:</strong> Led with vision and attracted fellow dreamers</p>
        <p><strong>Empowerment:</strong> "I stopped pretending to be boring and started attracting fellow dreamers."</p>
      </ExampleBox>

      <h2>The Four Pillars of Dating DNA Empowerment</h2>

      <h3>1. Social Energy Empowerment — Know Your Natural Networking Style</h3>
      
      <div class="stats-grid">
        <div class="stat-card">
          <h4>Connector Power</h4>
          <ul>
            <li>Own your ability to meet people everywhere</li>
            <li>Leverage your social energy as a superpower</li>
            <li>Stop feeling guilty for wanting variety and options</li>
          </ul>
          <p><strong>Mindset:</strong> "I'm a people magnet and that's my advantage"</p>
        </div>
        <div class="stat-card">
          <h4>Focuser Power</h4>
          <ul>
            <li>Own your depth and quality-over-quantity approach</li>
            <li>Leverage your ability to create meaningful connections</li>
            <li>Stop forcing yourself into draining social situations</li>
          </ul>
          <p><strong>Mindset:</strong> "I create profound connections and that's my gift"</p>
        </div>
      </div>

      <h3>2. Attraction Style Empowerment — Know What Genuinely Draws You</h3>
      
      <div class="stats-grid">
        <div class="stat-card">
          <h4>Present-Focused Power</h4>
          <ul>
            <li>Own your practical compatibility standards</li>
            <li>Leverage your ability to assess real-world fit</li>
            <li>Stop feeling shallow for valuing lifestyle alignment</li>
          </ul>
          <p><strong>Mindset:</strong> "I see reality clearly and choose wisely"</p>
        </div>
        <div class="stat-card">
          <h4>Potential-Focused Power</h4>
          <ul>
            <li>Own your visionary romantic spirit</li>
            <li>Leverage your ability to see people's hidden depths</li>
            <li>Stop settling for surface-level connections</li>
          </ul>
          <p><strong>Mindset:</strong> "I inspire growth and find diamonds in the rough"</p>
        </div>
      </div>

      <h3>3. Decision Filter Empowerment — Know Your Natural Evaluation Style</h3>
      
      <div class="stats-grid">
        <div class="stat-card">
          <h4>Logic-Driven Power</h4>
          <ul>
            <li>Own your analytical relationship approach</li>
            <li>Leverage your ability to assess long-term compatibility</li>
            <li>Stop feeling guilty for having practical standards</li>
          </ul>
          <p><strong>Mindset:</strong> "I make smart relationship choices that last"</p>
        </div>
        <div class="stat-card">
          <h4>Heart-Driven Power</h4>
          <ul>
            <li>Own your emotional intelligence and intuition</li>
            <li>Leverage your ability to feel true compatibility</li>
            <li>Stop second-guessing your gut feelings</li>
          </ul>
          <p><strong>Mindset:</strong> "I trust my heart and it leads me to real love"</p>
        </div>
      </div>

      <h3>4. Relationship Pace Empowerment — Know Your Natural Timeline</h3>
      
      <div class="stats-grid">
        <div class="stat-card">
          <h4>Structured Power</h4>
          <ul>
            <li>Own your need for clarity and progression</li>
            <li>Leverage your ability to build stable relationships</li>
            <li>Stop feeling needy for wanting definition</li>
          </ul>
          <p><strong>Mindset:</strong> "I create secure, intentional relationships"</p>
        </div>
        <div class="stat-card">
          <h4>Organic Power</h4>
          <ul>
            <li>Own your flexible, natural approach to love</li>
            <li>Leverage your ability to let relationships unfold beautifully</li>
            <li>Stop forcing artificial timelines</li>
          </ul>
          <p><strong>Mindset:</strong> "I let love develop authentically and perfectly"</p>
        </div>
      </div>

      <h2>The Confidence Multiplier Effect</h2>
      <p>When You Own Your Dating DNA...</p>

      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Confident dating with authentic self-expression" class="article-image">
      <p class="image-caption">The confidence multiplier effect: when you own your authentic self, everything changes</p>

      <h3>In Dating Apps:</h3>
      <ul>
        <li>Write profiles that attract your exact type</li>
        <li>Use photos that highlight your authentic personality</li>
        <li>Message with confidence knowing you're perfect for some people</li>
      </ul>

      <h3>On First Dates:</h3>
      <ul>
        <li>Show up as your genuine self from minute one</li>
        <li>Ask the right questions for your compatibility needs</li>
        <li>Leave knowing if there's real potential or not</li>
      </ul>

      <h3>In Relationships:</h3>
      <ul>
        <li>Communicate your needs without apology</li>
        <li>Choose partners who celebrate your personality</li>
        <li>Build relationships that enhance rather than drain you</li>
      </ul>

      <h3>In Life:</h3>
      <ul>
        <li>Stop trying to be someone else's version of attractive</li>
        <li>Invest energy only in promising connections</li>
        <li>Develop unshakeable self-worth in romantic contexts</li>
      </ul>

      <h2>The Liberation of Knowing Who You Are</h2>

      <div class="stats-grid">
        <div class="stat-card">
          <h4>You Stop:</h4>
          <ul>
            <li>Trying to appeal to everyone</li>
            <li>Apologizing for your personality</li>
            <li>Dating people who don't appreciate you</li>
            <li>Wondering what's wrong with you</li>
          </ul>
        </div>
        <div class="stat-card">
          <h4>You Start:</h4>
          <ul>
            <li>Attracting people who love your real self</li>
            <li>Celebrating your unique romantic strengths</li>
            <li>Choosing partners who enhance your life</li>
            <li>Knowing exactly what makes you irresistible</li>
          </ul>
        </div>
      </div>

      <h2>Your Dating DNA Is Your Romantic Superpower</h2>

      <HighlightBox>
        <h3>The Truth:</h3>
        <p>There's nothing wrong with your dating approach. You've just been using it in the wrong marketplace, with the wrong people, at the wrong times.</p>
        
        <h3>The Empowerment:</h3>
        <p>Your Dating DNA reveals how to leverage your natural personality as your greatest romantic asset.</p>
        
        <h3>The Result:</h3>
        <p>Instead of trying to fix yourself, you optimize your authentic self.<br>
        Instead of lowering your standards, you raise your self-awareness.<br>
        Instead of settling for whoever will have you, you attract people who can't get enough of the real you.</p>
      </HighlightBox>

      <h2>The Most Empowering Realization</h2>
      
      <QuoteBox>You don't need to change who you are to find love.<br>
      You need to understand who you are and present that powerfully.</QuoteBox>

      <p>Your Dating DNA isn't about fixing your flaws – it's about weaponizing your strengths.<br>
      Your personality isn't the problem – it's the solution.<br>
      The right person isn't going to tolerate your quirks – they're going to be addicted to them.</p>

      <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Happy couple showing the result of authentic connection" class="article-image">
      <p class="image-caption">The result of authentic empowerment: relationships built on real compatibility and mutual appreciation</p>

      <HighlightBox>
        <h3>Stop trying to be lovable to everyone.<br>
        Start being irresistible to the right someone.</h3>
        <p><strong>That's the power of knowing your Dating DNA.</strong></p>
      </HighlightBox>
    `
  }
};

function ArticlePage() {
  const { articleId } = useParams();
  const article = articles[articleId];

  if (!article) {
    return (
      <ArticleContainer>
        <ArticleContent>
          <BackLink to="/education">Back to Education Hub</BackLink>
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
        </ArticleContent>
      </ArticleContainer>
    );
  }

  return (
    <ArticleContainer>
      <ArticleContent>
        <BackLink to="/education">Back to Education Hub</BackLink>
        
        <ArticleHeader>
          <ArticleTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {article.title}
          </ArticleTitle>
          <ArticleSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {article.subtitle}
          </ArticleSubtitle>
        </ArticleHeader>

        <ArticleBody
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <CTAButton
            as={Link}
            to="/assessment"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Your Dating DNA
          </CTAButton>
        </motion.div>
      </ArticleContent>
    </ArticleContainer>
  );
}

export default ArticlePage; 