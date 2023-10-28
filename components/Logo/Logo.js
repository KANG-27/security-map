export default function Logo() {
  return (
    <div className="flex items-center flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={69}
        height={69}
        fill="none"
      >
        <path
          stroke="#2B2A5B"
          strokeWidth={1.5}
          d="M34.41 45.928 29.602 34.99s.798 1.142 4.806 1.142c4.01 0 4.336-1.142 4.336-1.142l-4.336 10.938Z"
        />
        <path
          stroke="#2B2A5B"
          strokeWidth={2}
          d="m23.393 7.258 22.516.125 15.833 16.01-.125 22.516-16.01 15.833-22.516-.125-15.833-16.01.125-22.516 16.01-15.833Z"
        />
        <path
          stroke="#2B2A5B"
          strokeWidth={2}
          d="m33.808 2 23.183 9.03L67 33.807 57.97 56.99 35.193 67 12.01 57.97 2 35.193l9.03-23.183L33.807 2Z"
        />
        <path
          stroke="#2B2A5B"
          strokeWidth={1.5}
          d="m19.367 49.652 3.743-6.49a1 1 0 0 1 .867-.5H45.35a1 1 0 0 1 .866.5l2.16 3.745 1.584 2.745a1 1 0 0 1-.866 1.5H20.233a1 1 0 0 1-.866-1.5Z"
        />
        <circle
          cx={34.173}
          cy={26.991}
          r={9.045}
          stroke="#2B2A5B"
          strokeWidth={1.5}
        />
        <circle cx={34.173} cy={26.991} r={2.612} fill="#2B2A5B" />
      </svg>
    </div>
  );
}