import React from 'react';
import RadioGroup from '../../ui/RadioGroup';
import Radio from '../../ui/Radio';

export default function Score1() {
  return (
    <div>
      <RadioGroup>
        <Radio name="score1" value="1" defaultChecked>
          &nbsp;1점
        </Radio>
        <Radio name="score1" value="2">
          &nbsp;2점
        </Radio>
        <Radio name="score1" value="3">
          &nbsp;3점
        </Radio>
        <Radio name="score1" value="4">
          &nbsp;4점
        </Radio>
        <Radio name="score1" value="5">
          &nbsp;5점
        </Radio>
        <Radio name="score1" value="6">
          &nbsp;6점
        </Radio>
        <Radio name="score1" value="7">
          &nbsp;7점
        </Radio>
        <Radio name="score1" value="8">
          &nbsp;8점
        </Radio>
        <Radio name="score1" value="9">
          &nbsp;9점
        </Radio>
        <Radio name="score1" value="9">
          &nbsp;10점
        </Radio>
      </RadioGroup>
    </div>
  );
}
