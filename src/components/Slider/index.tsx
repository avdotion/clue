import React, {useState, useRef, useEffect} from 'react';
// @ts-ignore
import styled, {use, css} from 'reshadow/macro';

const styles = {
  option: css`
    |pane {
      text-transform: uppercase;
      font-family: Roboto Mono;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      margin-left: 15px;
      margin-right: 15px;
      float: left;
      cursor: pointer;
    }
  `,
  pointer: css`
    |pointer {
      width: 24px;
      height: 100%;
      background-color: #000000;
      position: absolute;
      transition: 300ms ease-out;
    }
  `,
  slider: css`
    |wrapper {
      width: 400px;
    }

    |section {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 10px;
    }

    |rail {
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background-color: rgba(0, 0, 0, 0.1);
      position: relative;
    }
  `,
};

type OptionProps = {
  label: string,
  onClick: (option: string) => void,
};

const Option = React.forwardRef(({
  label,
  onClick,
}: OptionProps,
ref: any) => styled(
  styles.option
)``(
  <use.pane
    onClick={() => onClick(label)}
    ref={ref}
    as='div'
  >
    {label}
  </use.pane>
));

type PointerProps = {
  offsetLeft: string,
  offsetWidth: string,
};

const Pointer: React.FC<PointerProps> = ({
  offsetLeft,
  offsetWidth,
}: PointerProps) => styled(
  styles.pointer
)`
  |pointer {
    left: ${offsetLeft};
    width: ${offsetWidth};
  }
`(
  <use.pointer>
  </use.pointer>
);

type SliderProps = {
  options: readonly string[],
  currentOption: string,
  chooseOption: (option: string) => void,
};

// @ts-ignore
export const Slider: React.FC<SliderProps> = ({
  options,
  currentOption,
  chooseOption,
}: SliderProps) => {

  const [pointerOffsetLeft, setPointerOffsetLeft] = useState(0);
  const [pointerOffsetWidth, setPointerOffsetWidth] = useState(0);

  let optionRefs = useRef([]);
  let sectionRef = useRef();

  useEffect(() => {
    setPointerOffsetLeft(optionRefs
      .current[options.indexOf(currentOption)]
      .offsetLeft - sectionRef.current.offsetLeft
    );
    setPointerOffsetWidth(optionRefs
      .current[options.indexOf(currentOption)]
      .offsetWidth);
  });

  return styled(
    styles.slider
  )(
    <use.wrapper>
      <use.section ref={sectionRef}>
        {options.map((option, index) => <Option
          label={option}
          onClick={chooseOption}
          // @ts-ignore
          ref={option => optionRefs.current[index] = option}
          key={index}
        />)}
      </use.section>
      <use.section>
        <use.rail>
          <Pointer
            offsetLeft={pointerOffsetLeft+'px'}
            offsetWidth={pointerOffsetWidth+'px'}
          />
        </use.rail>
      </use.section>
    </use.wrapper>
  );
};
