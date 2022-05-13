/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

// emotion CSS part STARTS

const countdownStyles = css`
  font-weight: bold;
  font-size: 30px;
  background: linear-gradient(35deg, #ccffff, #ffcccc);
  padding: 50px;
  border-radius: 20%;
`;

const eventTitleStyles = css`
  color: white;
  text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;
`;

// emotion CSS part ENDS

function Body() {
  const [title, setTitle] = useState('Drag Race All Stars 7 Premier');
  const [description, setDescription] = useState(
    'She done already done had herses',
  );
  const [date, setDate] = useState('2022-05-20T14:00');

  return (
    <div>
      {/* input areas */}

      <div>
        {/* input for time */}

        <label>
          Time and Date:
          <input
            type="datetime-local"
            value={date}
            min="2022-05-13T00:00"
            onChange={(event) => {
              setDate(event.currentTarget.value);
            }}
          />
        </label>

        {/* input for title */}

        <label>
          Title:
          <input
            onChange={(event) => {
              setTitle(event.currentTarget.value);
            }}
          />
        </label>

        {/* input for description */}

        <label>
          Description:
          <input
            onChange={(event) => {
              setDescription(event.currentTarget.value);
            }}
          />
        </label>
      </div>

      {/* actual countdown */}

      <div css={countdownStyles}>
        <h1 css={eventTitleStyles}>{title}</h1>
        <br />
        <h2>Tick Tock INTERACTIVE TIME COUNTDOWN Tick Tock</h2>
        <br />
        <h3>{description}</h3>
      </div>
    </div>
  );
}

export default Body;
