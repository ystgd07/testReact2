import React from 'react';

export default function ScoreRadio2({ name }) {
  return (
    <div>
      <RadioGroup>
        <Radio name={name} value="1" defaultChecked>
          &nbsp;1점
        </Radio>
        <Radio name={name} value="2">
          &nbsp;2점
        </Radio>
        <Radio name={name} value="3">
          &nbsp;3점
        </Radio>
        <Radio name={name} value="4">
          &nbsp;4점
        </Radio>
        <Radio name={name} value="5">
          &nbsp;5점
        </Radio>
        <Radio name={name} value="6">
          &nbsp;6점
        </Radio>
        <Radio name={name} value="7">
          &nbsp;7점
        </Radio>
        <Radio name={name} value="8">
          &nbsp;8점
        </Radio>
        <Radio name={name} value="9">
          &nbsp;9점
        </Radio>
        <Radio name={name} value="9">
          &nbsp;10점
        </Radio>
      </RadioGroup>
    </div>
  );
}
