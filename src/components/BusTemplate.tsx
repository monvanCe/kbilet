import * as React from 'react';
const SVGComponent = (props: any) => {
  const dynamicBackground = (seatNumber: number) => {
    const el = props.selectedSeats.find((d: number) => d === seatNumber);

    if (el) {
      return 'selectedSeat';
    } else if (props.trip.seats[seatNumber - 1] === 0) {
      return 'st0';
    } else {
      return props.trip.seats[seatNumber - 1];
    }
  };

  const dynamicText = (seatNumber: number) => {
    if (props.trip.seats[seatNumber - 1] === 0) {
      return 'st2 st3';
    } else {
      return 'unavailable st3';
    }
  };

  return (
    <svg
      id="Layer_2_1_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 987 258"
      xmlSpace="preserve"
    >
      <style type="text/css">
        {
          "\n\t.st0{fill:none;stroke:#000000;stroke-miterlimit:10;}\n\t.st1{fill:none;}\n\t.st2{cursor: pointer;font-family:'MyriadPro-Regular';}\n\t.st3{font-size:15px;}\n\t.st4{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-dasharray:4.0229,4.0229;}\n\t.st5{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-dasharray:4;}\n\t.female{fill: #e03444;stroke: #000000;stroke-miterlimit:10;stroke-dasharray:4.0229,4.0229;}\n\t.male{fill: #18a4bc;stroke: #000000;stroke-miterlimit:10;stroke-dasharray:4.0229,4.0229;}\n\t.selectedSeat{fill: #ffea00;stroke: #000000;stroke-miterlimit:10;stroke-dasharray:4.0229,4.0229;}\n\t.unavailable{fill: #fff;font-family:'MyriadPro-Regular';cursor: default;}\n"
        }
      </style>

      <path
        className="st0"
        d="M870.6,22.4H53.2H49c0,0-16.4-0.9-19.5,4.4S15,70.5,13.7,119.9v19.6c1.3,49.4,12.7,88,15.8,93.2 s19.9,4.5,19.9,4.5l3.9-0.1h817.4H941c0,0,16.3-0.1,19.7-18.8c0,0,9.3-24,9.3-89.6s-10.3-92.6-10.3-92.6s-4.7-14-16-14 C932.3,22.2,870.6,22.4,870.6,22.4z"
      />
      <path
        className="st0"
        d="M941.4,187.5c0-3.7-0.4-7.1-1.1-10.1c-1.4-6-4-10-6.9-10c-4.4,0-8,9-8,20.1s3.6,20.1,8,20.1 C937.8,207.6,941.4,198.6,941.4,187.5z"
      />
      <path
        className="st0"
        d="M868.3,105.1H859c0,0-12,0.2-11.8-10.2V77.3C847,67,859,67.2,859,67.2h9.3V105.1z"
      />
      <path
        className="st0"
        d="M357,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(25)}
          d="M393.7,66.1c0,1.6-1.4,3-3,3H360c-1.6,0-3-1.4-3-3v-33c0-1.7,1.4-3,3-3h30.6c1.6,0,3,1.3,3,3v33H393.7z"
        />
      </g>
      <rect x={358} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(25)}
        transform="matrix(1 0 0 1 368.4171 55.2632)"
        className={dynamicText(25)}
      >
        {'25'}
      </text>
      <path
        className="st0"
        d="M357,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(26)}
          d="M393.7,108.1c0,1.6-1.4,3-3,3H360c-1.6,0-3-1.4-3-3v-33c0-1.6,1.4-3,3-3h30.6c1.6,0,3,1.4,3,3v33H393.7z"
        />
      </g>
      <rect x={358} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(26)}
        transform="matrix(1 0 0 1 368.4171 97.2308)"
        className={dynamicText(26)}
      >
        {'26'}
      </text>
      <path
        className="st0"
        d="M357,184.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(27)}
          d="M393.7,184.1c0,1.6-1.4,3-3,3H360c-1.6,0-3-1.3-3-3v-33c0-1.7,1.4-3,3-3h30.6c1.6,0,3,1.3,3,3v33H393.7z"
        />
      </g>
      <rect x={358} y={162.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(26)}
        transform="matrix(1 0 0 1 368.4171 173.2043)"
        className={dynamicText(27)}
      >
        {'27'}
      </text>
      <path
        className="st0"
        d="M357,226.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(28)}
          d="M393.7,226c0,1.6-1.4,3-3,3H360c-1.6,0-3-1.4-3-3v-33c0-1.6,1.4-3,3-3h30.6c1.6,0,3,1.4,3,3v33H393.7z"
        />
      </g>
      <rect x={358} y={204.5} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(28)}
        transform="matrix(1 0 0 1 368.4171 215.1719)"
        className={dynamicText(28)}
      >
        {'28'}
      </text>
      <path
        className="st0"
        d="M283.4,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(29)}
          d="M320.1,66.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V66.1z"
        />
      </g>
      <rect x={284.4} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(29)}
        transform="matrix(1 0 0 1 294.8495 55.2632)"
        className={dynamicText(29)}
      >
        {'29'}
      </text>
      <path
        className="st0"
        d="M283.4,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(30)}
          d="M320.1,108.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V108.1z"
        />
      </g>
      <rect x={284.4} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(30)}
        transform="matrix(1 0 0 1 294.8495 97.2308)"
        className={dynamicText(30)}
      >
        {'30'}
      </text>
      <path
        className="st0"
        d="M283.4,184.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(31)}
          d="M320.1,184.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.3-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V184.1z"
        />
      </g>
      <rect x={284.4} y={162.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(31)}
        transform="matrix(1 0 0 1 294.8495 173.2043)"
        className={dynamicText(31)}
      >
        {'31'}
      </text>
      <path
        className="st0"
        d="M283.4,226.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(32)}
          d="M320.1,226c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V226z"
        />
      </g>
      <rect x={284.4} y={204.5} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(32)}
        transform="matrix(1 0 0 1 294.8495 215.1719)"
        className={dynamicText(32)}
      >
        {'32'}
      </text>
      <path
        className="st0"
        d="M209.9,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(33)}
          d="M246.5,66.1c0,1.6-1.3,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.7,0,3,1.3,3,3V66.1z"
        />
      </g>
      <rect x={210.9} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(33)}
        transform="matrix(1 0 0 1 221.282 55.2632)"
        className={dynamicText(33)}
      >
        {'33'}
      </text>
      <path
        className="st0"
        d="M209.9,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(34)}
          d="M246.5,108.1c0,1.6-1.3,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.7,0,3,1.4,3,3V108.1z"
        />
      </g>
      <rect x={210.9} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(34)}
        transform="matrix(1 0 0 1 221.282 97.2308)"
        className={dynamicText(34)}
      >
        {'34'}
      </text>
      <path
        className="st0"
        d="M209.9,184.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(35)}
          d="M246.5,184.1c0,1.6-1.3,3-3,3h-30.6c-1.7,0-3-1.3-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.7,0,3,1.3,3,3V184.1z"
        />
      </g>
      <rect x={210.9} y={162.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(35)}
        transform="matrix(1 0 0 1 221.282 173.2043)"
        className={dynamicText(35)}
      >
        {'35'}
      </text>
      <path
        className="st0"
        d="M209.9,226.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(36)}
          d="M246.5,226c0,1.6-1.3,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.7,0,3,1.4,3,3V226z"
        />
      </g>
      <rect x={210.9} y={204.5} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(36)}
        transform="matrix(1 0 0 1 221.282 215.1719)"
        className={dynamicText(36)}
      >
        {'36'}
      </text>
      <path
        className="st0"
        d="M136.3,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(37)}
          d="M173,66.1c0,1.6-1.3,3-3,3h-30.6c-1.6,0-3-1.4-3-3v-33c0-1.7,1.4-3,3-3H170c1.7,0,3,1.3,3,3V66.1z"
        />
      </g>
      <rect x={137.3} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(37)}
        transform="matrix(1 0 0 1 147.7144 55.2632)"
        className={dynamicText(37)}
      >
        {'37'}
      </text>
      <path
        className="st0"
        d="M136.3,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(38)}
          d="M173,108.1c0,1.6-1.3,3-3,3h-30.6c-1.6,0-3-1.4-3-3v-33c0-1.6,1.4-3,3-3H170c1.7,0,3,1.4,3,3V108.1z"
        />
      </g>
      <rect x={137.3} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(38)}
        transform="matrix(1 0 0 1 147.7144 97.2308)"
        className={dynamicText(38)}
      >
        {'38'}
      </text>
      <path
        className="st0"
        d="M52.6,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(39)}
          d="M89.3,66.1c0,1.6-1.4,3-3,3H55.6c-1.7,0-3-1.4-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.7,0,3,1.3,3,3v33H89.3z"
        />
      </g>
      <rect x={53.6} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(39)}
        transform="matrix(1 0 0 1 64.0339 55.2632)"
        className={dynamicText(1)}
      >
        {'39'}
      </text>
      <path
        className="st0"
        d="M52.6,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(40)}
          d="M89.3,108.1c0,1.6-1.4,3-3,3H55.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.7,0,3,1.4,3,3v33H89.3z"
        />
      </g>
      <rect x={53.6} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(40)}
        transform="matrix(1 0 0 1 64.0339 97.2308)"
        className={dynamicText(40)}
      >
        {'40'}
      </text>

      <rect x={47.4} y={191.3} className="st1" width={36.2} height={17.2} />
      <text transform="matrix(1 0 0 1 54.7826 201.9432)" className="st3">
        {'WC'}
      </text>
      <path
        className="st0"
        d="M428.9,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(21)}
          d="M465.6,66.1c0,1.6-1.4,3-3,3H432c-1.6,0-3-1.4-3-3v-33c0-1.7,1.4-3,3-3h30.6c1.6,0,3,1.3,3,3V66.1z"
        />
      </g>
      <rect x={429.9} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(21)}
        transform="matrix(1 0 0 1 440.342 55.2632)"
        className={dynamicText(21)}
      >
        {'21'}
      </text>
      <path
        className="st0"
        d="M428.9,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(22)}
          d="M465.6,108.1c0,1.6-1.4,3-3,3H432c-1.6,0-3-1.4-3-3v-33c0-1.6,1.4-3,3-3h30.6c1.6,0,3,1.4,3,3V108.1z"
        />
      </g>
      <rect x={429.9} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(22)}
        transform="matrix(1 0 0 1 440.342 97.2308)"
        className={dynamicText(22)}
      >
        {'22'}
      </text>
      <path
        className="st0"
        d="M428.9,184.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(23)}
          d="M465.6,184.1c0,1.6-1.4,3-3,3H432c-1.6,0-3-1.3-3-3v-33c0-1.7,1.4-3,3-3h30.6c1.6,0,3,1.3,3,3V184.1z"
        />
      </g>
      <rect x={429.9} y={162.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(23)}
        transform="matrix(1 0 0 1 440.342 173.2043)"
        className={dynamicText(23)}
      >
        {'23'}
      </text>
      <path
        className="st0"
        d="M428.9,226.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(24)}
          d="M465.6,226c0,1.6-1.4,3-3,3H432c-1.6,0-3-1.4-3-3v-33c0-1.6,1.4-3,3-3h30.6c1.6,0,3,1.4,3,3V226z"
        />
      </g>
      <rect x={429.9} y={204.5} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(24)}
        transform="matrix(1 0 0 1 440.342 215.1719)"
        className={dynamicText(24)}
      >
        {'24'}
      </text>
      <path
        className="st0"
        d="M500.9,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(17)}
          d="M537.5,66.1c0,1.6-1.4,3-3,3h-30.6c-1.6,0-3-1.4-3-3v-33c0-1.7,1.4-3,3-3h30.6c1.6,0,3,1.3,3,3V66.1z"
        />
      </g>
      <rect x={501.8} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(17)}
        transform="matrix(1 0 0 1 512.267 55.2632)"
        className={dynamicText(17)}
      >
        {'17'}
      </text>
      <path
        className="st0"
        d="M500.9,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(18)}
          d="M537.5,108.1c0,1.6-1.4,3-3,3h-30.6c-1.6,0-3-1.4-3-3v-33c0-1.6,1.4-3,3-3h30.6c1.6,0,3,1.4,3,3V108.1z"
        />
      </g>
      <rect x={501.8} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(18)}
        transform="matrix(1 0 0 1 512.267 97.2308)"
        className={dynamicText(18)}
      >
        {'18'}
      </text>
      <path
        className="st0"
        d="M500.9,184.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(19)}
          d="M537.5,184.1c0,1.6-1.4,3-3,3h-30.6c-1.6,0-3-1.3-3-3v-33c0-1.7,1.4-3,3-3h30.6c1.6,0,3,1.3,3,3V184.1z"
        />
      </g>
      <rect x={501.8} y={162.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(19)}
        transform="matrix(1 0 0 1 512.267 173.2043)"
        className={dynamicText(19)}
      >
        {'19'}
      </text>
      <path
        className="st0"
        d="M500.9,226.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(20)}
          d="M537.5,226c0,1.6-1.4,3-3,3h-30.6c-1.6,0-3-1.4-3-3v-33c0-1.6,1.4-3,3-3h30.6c1.6,0,3,1.4,3,3V226z"
        />
      </g>
      <rect x={501.8} y={204.5} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(20)}
        transform="matrix(1 0 0 1 512.267 215.1719)"
        className={dynamicText(20)}
      >
        {'20'}
      </text>
      <path
        className="st0"
        d="M572.8,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(13)}
          d="M609.4,66.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V66.1z"
        />
      </g>
      <rect x={573.8} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(13)}
        transform="matrix(1 0 0 1 584.1919 55.2632)"
        className={dynamicText(13)}
      >
        {'13'}
      </text>
      <path
        className="st0"
        d="M572.8,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(14)}
          d="M609.4,108.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V108.1z"
        />
      </g>
      <rect x={573.8} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(14)}
        transform="matrix(1 0 0 1 584.1919 97.2308)"
        className={dynamicText(14)}
      >
        {'14'}
      </text>
      <path
        className="st0"
        d="M572.8,184.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(15)}
          d="M609.4,184.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.3-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V184.1z"
        />
      </g>
      <rect x={573.8} y={162.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(15)}
        transform="matrix(1 0 0 1 584.1919 173.2043)"
        className={dynamicText(15)}
      >
        {'15'}
      </text>
      <path
        className="st0"
        d="M572.8,226.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(16)}
          d="M609.4,226c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V226z"
        />
      </g>
      <rect x={573.8} y={204.5} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(16)}
        transform="matrix(1 0 0 1 584.1919 215.1719)"
        className={dynamicText(16)}
      >
        {'16'}
      </text>
      <path
        className="st0"
        d="M644.7,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(9)}
          d="M681.4,66.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V66.1z"
        />
      </g>
      <rect x={645.7} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(9)}
        transform="matrix(1 0 0 1 659.9635 55.2632)"
        className={dynamicText(9)}
      >
        {'9'}
      </text>
      <path
        className="st0"
        d="M644.7,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(10)}
          d="M681.4,108.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V108.1z"
        />
      </g>
      <rect x={645.7} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(10)}
        transform="matrix(1 0 0 1 656.1168 97.2308)"
        className={dynamicText(10)}
      >
        {'10'}
      </text>
      <path
        className="st0"
        d="M644.7,184.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(11)}
          d="M681.4,184.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.3-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V184.1z"
        />
      </g>
      <rect x={645.7} y={162.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(11)}
        transform="matrix(1 0 0 1 656.1168 173.2043)"
        className={dynamicText(11)}
      >
        {'11'}
      </text>
      <path
        className="st0"
        d="M644.7,226.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(12)}
          d="M681.4,226c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V226z"
        />
      </g>
      <rect x={645.7} y={204.5} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(12)}
        transform="matrix(1 0 0 1 656.1168 215.1719)"
        className={dynamicText(12)}
      >
        {'12'}
      </text>
      <path
        className="st0"
        d="M716.6,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(5)}
          d="M753.3,66.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V66.1z"
        />
      </g>
      <rect x={717.6} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(5)}
        transform="matrix(1 0 0 1 731.8884 55.2632)"
        className={dynamicText(5)}
      >
        {'5'}
      </text>
      <path
        className="st0"
        d="M716.6,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(6)}
          d="M753.3,108.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V108.1z"
        />
      </g>
      <rect x={717.6} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(6)}
        transform="matrix(1 0 0 1 731.8884 97.2308)"
        className={dynamicText(6)}
      >
        {'6'}
      </text>
      <path
        className="st0"
        d="M716.6,184.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(7)}
          d="M753.3,184.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.3-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V184.1z"
        />
      </g>
      <rect x={717.6} y={162.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(7)}
        transform="matrix(1 0 0 1 731.8884 173.2043)"
        className={dynamicText(7)}
      >
        {'7'}
      </text>
      <path
        className="st0"
        d="M716.6,226.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(8)}
          d="M753.3,226c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V226z"
        />
      </g>
      <rect x={717.6} y={204.5} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(8)}
        transform="matrix(1 0 0 1 731.8884 215.1719)"
        className={dynamicText(8)}
      >
        {'8'}
      </text>
      <path
        className="st0"
        d="M788.6,66.5h-8.2c0,0-10.6,0.2-10.4-9V42c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(1)}
          d="M825.2,66.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V66.1z"
        />
      </g>
      <rect x={789.5} y={44.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(1)}
        transform="matrix(1 0 0 1 803.8134 55.2632)"
        className={dynamicText(1)}
      >
        {'1'}
      </text>
      <path
        className="st0"
        d="M788.6,108.5h-8.2c0,0-10.6,0.2-10.4-9V84c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(2)}
          d="M825.2,108.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V108.1z"
        />
      </g>
      <rect x={789.5} y={86.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(2)}
        transform="matrix(1 0 0 1 803.8134 97.2308)"
        className={dynamicText(2)}
      >
        {'2'}
      </text>
      <path
        className="st0"
        d="M788.6,184.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className="st0"
          d="M825.2,184.1c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.3-3-3v-33c0-1.7,1.3-3,3-3h30.6c1.6,0,3,1.3,3,3V184.1z"
        />
      </g>
      <path
        className="st0"
        d="M855.9,171.6h-8.2c0,0-10.6-0.2-10.4,9v15.6c-0.2,9.2,10.4,9,10.4,9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(3)}
          d="M892.5,172c0-1.6-1.4-3-3-3h-30.6c-1.7,0-3,1.4-3,3v33c0,1.6,1.3,3,3,3h30.6c1.6,0,3-1.4,3-3V172z"
        />
      </g>
      <rect x={789.5} y={162.6} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(3)}
        transform="matrix(1 0 0 1 803.8134 173.2043)"
        className={dynamicText(3)}
      >
        {'3'}
      </text>
      <path
        className="st0"
        d="M788.6,226.5h-8.2c0,0-10.6,0.2-10.4-9v-15.6c-0.2-9.2,10.4-9,10.4-9h8.2"
      />
      <g>
        <path
          className={dynamicBackground(4)}
          d="M825.2,226c0,1.6-1.4,3-3,3h-30.6c-1.7,0-3-1.4-3-3v-33c0-1.6,1.3-3,3-3h30.6c1.6,0,3,1.4,3,3V226z"
        />
      </g>
      <rect x={789.5} y={204.5} className="st1" width={36.2} height={17.2} />
      <text
        onClick={() => props.seatOnClick(4)}
        transform="matrix(1 0 0 1 803.8134 215.1719)"
        className={dynamicText(4)}
      >
        {'4'}
      </text>
      <polyline
        className="st0"
        points="180.8,236.9 180.8,161.8 112.8,161.8 112.8,237.1 "
      />
      <line className="st0" x1={112.8} y1={177} x2={181.1} y2={177} />
      <line className="st0" x1={112.8} y1={191.9} x2={181.1} y2={191.9} />
      <line className="st0" x1={112.8} y1={206.8} x2={181.1} y2={206.8} />
      <line className="st0" x1={112.8} y1={161.8} x2={15.2} y2={161.8} />
      <path
        className="st0"
        d="M929.6,22.2L926,44.9c0,0-5.2,33.6-6.8,43.6s-6.2,29-8.5,34s-5.2,8-5.2,8v8.7l5.5,9.7 c3.9,11,23.8,10.7,23.8,10.7c8.5,1.7,9.1,12.3,9.1,12.3s0.7,24.3,0,33.3s-11.1,12.3-11.1,12.3s-85.6-0.3-86.3,0 c-14,0.3-17.9,20-17.9,20"
      />
      <path
        className="st0"
        d="M854.7,22.2l0.3,30.3h-9.7v56.6h-10c0,0-7.2,2.3-6.9,9.3v119.3"
      />
      <g>
        <g>
          <line className="st0" x1={914} y1={110.1} x2={912.1} y2={109.5} />
          <line className="st4" x1={908.2} y1={108.3} x2={871.8} y2={96.7} />
          <line className="st0" x1={869.9} y1={96.1} x2={868} y2={95.5} />
        </g>
      </g>
      <path className="st5" d="M868,78.8h39.6v-13c0,0,4.7-8,16.3-9.7" />
      <line className="st5" x1={855} y1={52.5} x2={924.3} y2={52.5} />
      <rect x={866.4} y={17.2} className="st0" width={95.9} height={4.3} />
      <rect x={866.4} y={238} className="st0" width={95.9} height={4.3} />
    </svg>
  );
};
export default SVGComponent;
