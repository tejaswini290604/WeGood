import React from 'react';

const Page1 = () => {
  return (
    <div style={{ width: 1434, height: 804, position: 'relative', background: '#6FA86A' }}>
      <div style={{ width: 1000, height: 42, paddingTop: 16, paddingBottom: 8, paddingRight: 8, left: 29, top: 0, position: 'absolute', background: '#6FA86A', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>
          6.How often do you feel anxious or worried?
        </div>
      </div>
      {/* Add the rest of the divs for options like Rarely or never, Sometimes, etc. */}
    </div>
  );
};

export default Page1;
import React from 'react';

const Page2 = () => {
  const handleContinueClick = () => {
    // Add your logic for handling the continue click (e.g., navigate to the quiz page or start a quiz API request)
    console.log("Continue button clicked");
  };

  return (
    <div className="relative w-[1434px] h-[804px] bg-white">
      <img
        className="absolute w-full h-full top-0 left-0"
        src="https://placehold.co/1434x804"
        alt="Background"
      />
      <div className="absolute w-[780px] h-[396px] left-[305px] top-[105px] flex flex-col justify-start items-center gap-8">
        <div className="text-center text-[#FFFDF8] text-8xl font-modak font-normal leading-[140.80px] tracking-normal text-shadow-lg">
          Take the Mental Health Quiz
        </div>
      </div>
      <div
        onClick={handleContinueClick}
        className="absolute w-[312px] h-[107px] left-[561px] top-[541px] flex justify-center items-center gap-4 bg-white bg-opacity-20 rounded-full cursor-pointer"
      >
        <div className="text-center text-black text-4xl font-roboto-mono font-bold">
          Continue
        </div>
        <div className="relative">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.5117 19.3183L31.5483 11.355C31.0717 10.8785 30.3549 10.7359 29.7322 10.9938C29.1095 11.2517 28.7035 11.8593 28.7033 12.5333V17.58C28.7033 17.8101 28.5168 17.9966 28.2867 17.9966H2.5C1.11929 17.9966 0 19.1159 0 20.4966C0 21.8773 1.11929 22.9966 2.5 22.9966H28.2867C28.5168 22.9966 28.7033 23.1832 28.7033 23.4133V28.46C28.7035 29.134 29.1095 29.7415 29.7322 29.9994C30.3549 30.2573 31.0717 30.1148 31.5483 29.6383L39.5117 21.675C40.1623 21.0241 40.1623 19.9691 39.5117 19.3183Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page2;
import React, { useState } from 'react';

const MentalHealthSurvey = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = () => {
    console.log('Survey Answers:', answers);
    // Here, you can implement logic to store the answers, send to a server, etc.
  };

  return (
    <div style={{ padding: 20, backgroundColor: '#9CCB7A', borderRadius: 10, width: '50%', margin: '0 auto' }}>
      <h2>Mental Health Survey</h2>
      
      <div>
        <h3>1. How would you describe your overall mental health in the past month?</h3>
        <div>
          <input
            type="radio"
            name="question1"
            value="Good"
            onChange={() => handleAnswerChange('question1', 'Good')}
          /> Good
          <input
            type="radio"
            name="question1"
            value="Average"
            onChange={() => handleAnswerChange('question1', 'Average')}
          /> Average
          <input
            type="radio"
            name="question1"
            value="Poor"
            onChange={() => handleAnswerChange('question1', 'Poor')}
          /> Poor
        </div>
      </div>
      
      <div>
        <h3>2. Have you experienced difficulty in sleeping or eating?</h3>
        <div>
          <input
            type="radio"
            name="question2"
            value="Yes"
            onChange={() => handleAnswerChange('question2', 'Yes')}
          /> Yes
          <input
            type="radio"
            name="question2"
            value="No"
            onChange={() => handleAnswerChange('question2', 'No')}
          /> No
        </div>
      </div>
      
      <div>
        <h3>3. Have you been experiencing persistent sadness or hopelessness?</h3>
        <div>
          <input
            type="radio"
            name="question3"
            value="No"
            onChange={() => handleAnswerChange('question3', 'No')}
          /> No, not at all
          <input
            type="radio"
            name="question3"
            value="Occasionally"
            onChange={() => handleAnswerChange('question3', 'Occasionally')}
          /> Occasionally
          <input
            type="radio"
            name="question3"
            value="Yes"
            onChange={() => handleAnswerChange('question3', 'Yes')}
          /> Yes, almost every day
        </div>
      </div>

      <div>
        <h3>4. Do you feel isolated or disconnected from others?</h3>
        <div>
          <input
            type="radio"
            name="question4"
            value="Yes"
            onChange={() => handleAnswerChange('question4', 'Yes')}
          /> Yes
          <input
            type="radio"
            name="question4"
            value="No"
            onChange={() => handleAnswerChange('question4', 'No')}
          /> No
        </div>
      </div>

      <div>
        <h3>5. Do you experience mood swings that are difficult to control?</h3>
        <div>
          <input
            type="radio"
            name="question5"
            value="Yes"
            onChange={() => handleAnswerChange('question5', 'Yes')}
          /> Yes
          <input
            type="radio"
            name="question5"
            value="No"
            onChange={() => handleAnswerChange('question5', 'No')}
          /> No
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={handleSubmit} style={{ padding: '10px 20px', backgroundColor: '#5a9e56', color: 'white', border: 'none', borderRadius: 5 }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MentalHealthSurvey;
import React from 'react';

const SurveyForm = () => {
  return (
    <div style={{ width: 1434, height: 804, position: 'relative', background: '#6FA86A' }}>
      <div style={{
        width: 1000, height: 42, paddingTop: 16, paddingBottom: 8, paddingRight: 8,
        left: 29, top: 0, position: 'absolute', background: '#6FA86A', flexDirection: 'column',
        justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'
      }}>
        <div style={{
          alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto',
          fontWeight: '700', wordWrap: 'break-word'
        }}>
          6. How often do you feel anxious or worried?
        </div>
      </div>
      <div style={{
        width: 867, height: 30, paddingTop: 8, paddingRight: 8, left: 29, top: 42,
        position: 'absolute', background: '#6FA86A', justifyContent: 'flex-start',
        alignItems: 'flex-start', display: 'inline-flex'
      }}>
        <div style={{
          paddingBottom: 2, paddingRight: 8, background: '#6FA86A', flexDirection: 'column',
          justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            width: 20, height: 20, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: 9999, border: '1px black solid'
          }} />
        </div>
        <div style={{
          width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
          gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400',
            wordWrap: 'break-word'
          }}>
            Rarely or never.
          </div>
        </div>
      </div>
      <div style={{
        width: 867, height: 30, paddingTop: 8, paddingRight: 8, left: 29, top: 72,
        position: 'absolute', background: '#6FA86A', justifyContent: 'flex-start', alignItems: 'flex-start',
        display: 'inline-flex'
      }}>
        <div style={{
          paddingBottom: 2, paddingRight: 8, background: '#6FA86A', flexDirection: 'column',
          justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            width: 20, height: 20, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: 9999, border: '1px black solid'
          }} />
        </div>
        <div style={{
          width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
          gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400',
            wordWrap: 'break-word'
          }}>
            Sometimes, but I can control it.
          </div>
        </div>
      </div>
      <div style={{
        width: 867, height: 30, paddingTop: 8, paddingRight: 8, left: 29, top: 129,
        position: 'absolute', background: '#6FA86A', justifyContent: 'flex-start', alignItems: 'flex-start',
        display: 'inline-flex'
      }}>
        <div style={{
          paddingBottom: 2, paddingRight: 8, background: '#6FA86A', flexDirection: 'column',
          justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            width: 20, height: 20, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: 9999, border: '1px black solid'
          }} />
        </div>
        <div style={{
          width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
          gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400',
            wordWrap: 'break-word'
          }}>
            Almost always, and it disrupts my daily life.
          </div>
        </div>
      </div>
      <div style={{
        width: 867, height: 29, paddingTop: 8, paddingRight: 8, left: 29, top: 100,
        position: 'absolute', background: '#6FA86A', justifyContent: 'flex-start', alignItems: 'flex-start',
        display: 'inline-flex'
      }}>
        <div style={{
          paddingBottom: 2, paddingRight: 8, background: '#6FA86A', flexDirection: 'column',
          justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            width: 20, height: 20, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: 9999, border: '1px black solid'
          }} />
        </div>
        <div style={{
          width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
          gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400',
            wordWrap: 'break-word'
          }}>
            Frequently, and it's difficult to manage.
          </div>
        </div>
      </div>
      <div style={{
        width: 992, height: 39, paddingTop: 16, paddingBottom: 8, paddingRight: 8, left: 29, top: 318,
        position: 'absolute', background: '#6FA86A', flexDirection: 'column', justifyContent: 'flex-start',
        alignItems: 'flex-start', display: 'inline-flex'
      }}>
        <div style={{
          alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700',
          wordWrap: 'break-word'
        }}>
          8. How would you describe your sleep quality?
        </div>
      </div>
      <div style={{
        width: 860, height: 28, paddingTop: 8, paddingRight: 8, left: 29, top: 357,
        position: 'absolute', background: '#6FA86A', justifyContent: 'flex-start', alignItems: 'flex-start',
        display: 'inline-flex'
      }}>
        <div style={{
          paddingBottom: 2, paddingRight: 8, background: '#6FA86A', flexDirection: 'column',
          justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            width: 20, height: 20, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: 9999, border: '1px black solid'
          }} />
        </div>
        <div style={{
          width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
          gap: 10, display: 'inline-flex'
        }}>
          <div style={{
            alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400',
            wordWrap: 'break-word'
          }}>
            Excellent - I sleep well and wake up refreshed.
          </div>
        </div>
      </div>
      {/* Continue converting other parts of the survey similarly */}
    </div>
  );
};

export default SurveyForm;
import React from 'react';

const Page5 = () => {
  return (
    <div style={{ width: 1434, height: 804, position: 'relative', background: '#6FA86A' }}>
      <div style={{ width: 1000, height: 42, paddingTop: 16, paddingBottom: 8, paddingRight: 8, left: 29, top: 0, position: 'absolute', background: '#6FA86A', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>6. How often do you feel anxious or worried?</div>
      </div>

      <div style={{ width: 867, height: 30, paddingTop: 8, paddingRight: 8, left: 29, top: 42, position: 'absolute', background: '#6FA86A', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div style={{ paddingBottom: 2, paddingRight: 8, background: '#6FA86A', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ width: 20, height: 20, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999, border: '1px black solid' }} />
        </div>
        <div style={{ width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Rarely or never.</div>
        </div>
      </div>

      <div style={{ width: 867, height: 30, paddingTop: 8, paddingRight: 8, left: 29, top: 72, position: 'absolute', background: '#6FA86A', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div style={{ paddingBottom: 2, paddingRight: 8, background: '#6FA86A', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ width: 20, height: 20, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999, border: '1px black solid' }} />
        </div>
        <div style={{ width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Sometimes, but I can control it.</div>
        </div>
      </div>

      <div style={{ width: 867, height: 30, paddingTop: 8, paddingRight: 8, left: 29, top: 129, position: 'absolute', background: '#6FA86A', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div style={{ paddingBottom: 2, paddingRight: 8, background: '#6FA86A', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ width: 20, height: 20, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999, border: '1px black solid' }} />
        </div>
        <div style={{ width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Almost always, and it disrupts my daily life.</div>
        </div>
      </div>

      <div style={{ width: 867, height: 29, paddingTop: 8, paddingRight: 8, left: 29, top: 100, position: 'absolute', background: '#6FA86A', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div style={{ paddingBottom: 2, paddingRight: 8, background: '#6FA86A', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ width: 20, height: 20, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999, border: '1px black solid' }} />
        </div>
        <div style={{ width: 527, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Frequently, and it's difficult to manage.</div>
        </div>
      </div>

      <div style={{ width: 992, height: 39, paddingTop: 16, paddingBottom: 8, paddingRight: 8, left: 29, top: 318, position: 'absolute', background: '#6FA86A', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>8. How would you describe your sleep quality?</div>
      </div>

      {/* Continue similarly for the remaining sections */}
    </div>
  );
};

export default Page5;