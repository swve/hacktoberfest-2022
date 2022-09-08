import styled, { keyframes } from 'styled-components';

const StyledDiv = styled.div``;

// export const LogoWrapper = styled.div`
//   width: max-content;
//   .text {
//     filter: ${(props) => props.theme.glowLiteDS};
//   }

//   .bug_wrapper {
//     margin: 0 auto;
//     width: 224px;
//     height: 224px;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     #bug {
//       transform: scale(2);
//     }
//   }

//   &:hover {
//     #globe {
//       transform: scale(0.95) rotate(40deg);
//     }
//   }
// `;

const BadgeWrapper = styled(StyledDiv)`
  position: relative;
  width: max-content;

  .h-mark_wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 10;
    .h-mark {
      filter: drop-shadow(0px 0px 4px ${(props) => props.theme.holoShadow})
        drop-shadow(0px 0px 4px ${(props) => props.theme.body});
      transform: scale(0.6);
    }
  }
`;

const GlobeWrapper = styled(StyledDiv)`
  background: ${(props) => props.theme.body};
  border-radius: 100%;
  height: 104px;
  position: relative;
  transform: rotate(30deg);
  transition: 0.4s cubic-bezier(0.2, -2, 0.2, 3);
  width: 104px;
  opacity: 0.5;

  svg {
    // filter: drop-shadow(0px 0px 5px ${(props) => props.theme.holoShadow});
  }

  &:after {
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.spark} 0%,
      ${(props) => props.theme.surf} 50%,
      ${(props) => props.theme.psybeam} 100%
    );
    border-radius: 100%;
    content: '';
    height: 100%;
    mix-blend-mode: ${(props) => props.theme.blendMode};
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const spinAnimation = (x) => keyframes`
  to {
    width: ${x}px;
  }
`;

const Spinner = styled(StyledDiv)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  .spinner {
    animation: ${(props) => spinAnimation(props.spin)} 1s linear infinite
      alternate;
    border: 3px solid ${(props) => props.theme.text};
    border-radius: 100%;
    // filter: drop-shadow(0px 0px 5px ${(props) => props.theme.holoShadow});
    height: 104px;
    margin: 0 auto;
    width: 52px;

    @media (prefers-reduced-motion) {
      animation-play-state: paused;
    }
  }
`;

export const Globe = (props) => (
  <GlobeWrapper {...props} id="globe">
    <svg
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M103.494 59.28C103.828 56.9012 104 54.4707 104 52C104 44.4439 102.388 37.2642 99.4901 30.786C99.0711 29.8494 98.6253 28.9275 98.1535 28.0212C89.485 11.3705 72.0703 0 52 0C23.2812 0 0 23.2812 0 52C0 80.7188 23.2812 104 52 104C75.3774 104 95.1517 88.5737 101.699 67.3453C102.441 64.9397 103.013 62.4596 103.401 59.9191C103.433 59.7065 103.465 59.4935 103.494 59.28ZM99.0506 65.7291C100.32 61.3728 101 56.7659 101 52C101 45.0711 99.5618 38.4781 96.9677 32.5032C94.7544 33.8552 92.1735 35.0836 89.3025 36.1746C79.6824 39.8302 66.4937 42.06 52.0001 42.06C37.5065 42.06 24.3177 39.8302 14.6977 36.1746C11.8266 35.0836 9.2457 33.8552 7.03232 32.5031C4.43818 38.478 3 45.0711 3 52C3 56.7659 3.68039 61.3728 4.94935 65.729C4.99539 65.7712 5.04192 65.8135 5.08893 65.8557C7.53451 68.0529 11.1579 70.1002 15.7633 71.8503C24.9636 75.3464 37.7748 77.54 52 77.54C66.2253 77.54 79.0365 75.3464 88.2368 71.8503C92.8422 70.1002 96.4656 68.0529 98.9111 65.8557C98.9581 65.8135 99.0046 65.7713 99.0506 65.7291ZM97.2637 70.8002C94.9856 72.2246 92.3025 73.5146 89.3024 74.6546C79.6824 78.3102 66.4936 80.54 52 80.54C37.5065 80.54 24.3177 78.3102 14.6977 74.6546C11.6975 73.5146 9.01438 72.2245 6.73623 70.8002C14.1095 88.5321 31.5987 101 52 101C72.4012 101 89.8905 88.5321 97.2637 70.8002ZM88.2368 33.3703C91.1183 32.2753 93.6154 31.0639 95.6801 29.7723C87.5779 13.8822 71.0598 3 52 3C32.9402 3 16.4221 13.8821 8.31992 29.7722C10.3846 31.0639 12.8818 32.2753 15.7634 33.3703C24.9636 36.8664 37.7749 39.06 52.0001 39.06C66.2253 39.06 79.0365 36.8664 88.2368 33.3703Z"
        fill="currentColor"
      />
    </svg>

    <Spinner spin="104">
      <div className="spinner" />
    </Spinner>
    <Spinner spin="0">
      <div className="spinner" />
    </Spinner>
  </GlobeWrapper>
);

export const Bug = () => (
  <BadgeWrapper id="bug">
    <div className="h-mark_wrapper">
      <svg
        width="47"
        height="51"
        viewBox="0 0 47 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-mark"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.5556 2.73456e-06L31.3333 0V5.1H26.1111L26.1111 10.2L20.8889 10.2V15.3H26.1111L26.1111 10.2L31.3333 10.2L31.3333 25.5L20.8889 25.5V30.6L15.6667 30.6V5.1L10.4444 5.1V10.2L5.22222 10.2V15.3L1.30258e-06 15.3L0 20.4H5.22222V15.3H10.4444L10.4444 35.7L5.22222 35.7L5.22222 40.8H10.4444L10.4444 51L15.6667 51L15.6667 35.7L20.8889 35.7L20.8889 30.6L31.3333 30.6L31.3333 45.9L36.5556 45.9L36.5556 40.8H41.7778V35.7L47 35.7V30.6L41.7778 30.6L41.7778 35.7H36.5556L36.5556 2.73456e-06Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <Globe />
  </BadgeWrapper>
);

// const Logo = forwardRef((props, ref) => (
//   <LogoWrapper {...props} ref={ref}>
//     <div className="bug_wrapper">
//       <Bug />
//     </div>
//     <svg
//       width="259"
//       height="138"
//       viewBox="0 0 259 138"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="text"
//     >
//       <path
//         d="M27.0649 0L37.2717 0V15.3141H65.9451V0L76.1519 0V41.5498H65.9451V25.286L37.2717 25.286V41.5498H27.0649V0Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M89.8774 7.41962C90.5067 5.28277 91.549 3.52184 93.0043 2.13686C94.499 0.712273 96.5442 0 99.1402 0L111.471 0C114.106 0 116.211 0.712273 117.784 2.13686C119.357 3.52184 120.458 5.28277 121.088 7.41962L131.235 41.5498L119.908 41.5498L117.135 31.5778H98.4322L100.792 21.6059H114.362L111.176 9.97194H99.7302L90.9984 41.5498H79.6706L89.8774 7.41962Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M134.159 7.41962C134.159 6.35119 134.356 5.36188 134.749 4.45177C135.142 3.54162 135.654 2.76997 136.283 2.13686C136.952 1.46414 137.719 0.94971 138.584 0.593554C139.489 0.197838 140.413 0 141.357 0L180.119 0V9.97194L144.366 9.97194V31.5778H180.119V41.5498H141.77C140.708 41.5498 139.705 41.3519 138.761 40.9562C137.817 40.5605 137.011 40.0461 136.342 39.4129C135.673 38.7402 135.142 37.9686 134.749 37.098C134.356 36.1879 134.159 35.2579 134.159 34.3082V7.41962Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M185.451 0L195.658 0V16.2638H204.862L217.37 0L229.169 0L213.771 20.1813L232.06 41.5498H219.021L205.393 26.2357H195.658V41.5498H185.451V0Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M19.8236 57.8896H0L0 47.9177H49.7359V57.8896H30.0304L30.0304 89.4675H19.8236L19.8236 57.8896Z"
//         fill="#E5E1E6"
//       />
//       <path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M53.5598 55.3373C53.5598 54.2689 53.7565 53.2796 54.1498 52.3694C54.5431 51.4593 55.0543 50.6877 55.6838 50.0545C56.3524 49.3818 57.1194 48.8674 57.9847 48.5113C58.8893 48.1155 59.8136 47.9177 60.7576 47.9177H95.7439C96.8059 47.9177 97.8088 48.1155 98.7528 48.5113C99.6968 48.907 100.503 49.4412 101.172 50.1139C101.84 50.747 102.371 51.5187 102.765 52.4288C103.158 53.2994 103.355 54.2095 103.355 55.1592V82.0478C103.355 83.1163 103.158 84.1056 102.765 85.0157C102.371 85.9258 101.84 86.7172 101.172 87.39C100.542 88.0231 99.7754 88.5375 98.8708 88.9332C98.0055 89.2894 97.1009 89.4675 96.1569 89.4675H61.1706C60.1086 89.4675 59.1057 89.2696 58.1617 88.8739C57.2177 88.4781 56.4114 87.9637 55.7427 87.3306C55.074 86.6579 54.5431 85.8862 54.1498 85.0157C53.7565 84.1056 53.5598 83.1756 53.5598 82.2259V55.3373ZM93.148 79.4955V57.8896H63.7665V79.4955H93.148Z"
//         fill="#E5E1E6"
//       />
//       <path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M108.654 55.3373C108.654 54.2689 108.851 53.2796 109.244 52.3694C109.638 51.4593 110.149 50.6877 110.778 50.0545C111.447 49.3818 112.214 48.8674 113.079 48.5113C113.984 48.1155 114.908 47.9177 115.852 47.9177L144.113 47.9177C145.175 47.9177 146.158 48.1155 147.063 48.5113C147.967 48.907 148.734 49.4412 149.364 50.1139C150.032 50.747 150.544 51.5187 150.898 52.4288C151.291 53.2994 151.488 54.2095 151.488 55.1592V63.8253C152.549 63.8253 153.493 64.0232 154.319 64.4189C155.185 64.8146 155.912 65.3488 156.502 66.0215C157.092 66.6546 157.525 67.4263 157.8 68.3364C158.115 69.207 158.272 70.1171 158.272 71.0668V82.0478C158.272 83.1163 158.076 84.1056 157.682 85.0157C157.289 85.9258 156.758 86.7172 156.089 87.39C155.46 88.0231 154.693 88.5375 153.788 88.9332C152.923 89.2894 152.019 89.4675 151.075 89.4675H108.654V55.3373ZM148.066 79.4955V73.1444H118.861V79.4955H148.066ZM141.281 63.8253V57.8896L118.861 57.8896V63.8253L141.281 63.8253Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M162.972 55.3373C162.972 54.2689 163.169 53.2796 163.562 52.3694C163.956 51.4593 164.467 50.6877 165.096 50.0545C165.765 49.3818 166.532 48.8674 167.397 48.5113C168.302 48.1155 169.226 47.9177 170.17 47.9177H207.339V57.8896H173.179V63.2317H202.679V73.2037H173.179V79.4955H207.339V89.4675H170.583C169.521 89.4675 168.518 89.2696 167.574 88.8739C166.63 88.4781 165.824 87.9637 165.155 87.3306C164.487 86.6579 163.956 85.8862 163.562 85.0157C163.169 84.1056 162.972 83.1756 162.972 82.2259V55.3373Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M36.0649 103.716C36.0649 102.648 36.2616 101.658 36.655 100.748C37.0483 99.838 37.5596 99.0663 38.1889 98.4332C38.8576 97.7605 39.6245 97.2461 40.4898 96.8899C41.3945 96.4943 42.3188 96.2964 43.2628 96.2964H77.541V106.268H46.2717V115.825H72.8211V125.797H46.2717L46.2717 137.846H36.0649L36.0649 103.716Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M81.3373 103.716C81.3373 102.648 81.5339 101.658 81.9272 100.748C82.3205 99.838 82.8319 99.0663 83.4612 98.4332C84.1298 97.7605 84.8969 97.2461 85.7621 96.8899C86.6668 96.4943 87.5911 96.2964 88.5351 96.2964H125.704V106.268H91.544V111.61H121.043V121.582H91.544V127.874H125.704V137.846H88.9481C87.8861 137.846 86.8832 137.648 85.9392 137.253C84.9952 136.857 84.1888 136.342 83.5202 135.709C82.8515 135.037 82.3205 134.265 81.9272 133.394C81.5339 132.484 81.3373 131.554 81.3373 130.605V103.716Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M131.016 127.874H170.486V121.582H138.391C137.329 121.582 136.346 121.385 135.441 120.989C134.536 120.593 133.75 120.079 133.081 119.446C132.452 118.773 131.94 118.001 131.547 117.131C131.193 116.221 131.016 115.291 131.016 114.341V103.716C131.016 102.648 131.213 101.658 131.606 100.748C131.999 99.838 132.511 99.0663 133.14 98.4332C133.809 97.7605 134.576 97.2461 135.441 96.8899C136.346 96.4943 137.27 96.2964 138.214 96.2964H176.091V106.268H141.223V111.61H173.318C174.38 111.61 175.363 111.808 176.268 112.204C177.173 112.6 177.94 113.134 178.569 113.807C179.238 114.44 179.749 115.211 180.103 116.122C180.496 116.992 180.693 117.902 180.693 118.852V130.427C180.693 131.495 180.496 132.484 180.103 133.394C179.71 134.305 179.179 135.096 178.51 135.769C177.881 136.402 177.114 136.916 176.209 137.312C175.344 137.668 174.439 137.846 173.495 137.846H131.016V127.874Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M200.514 106.268H180.69V96.2964H230.426V106.268H210.721V137.846H200.514V106.268Z"
//         fill="#E5E1E6"
//       />
//       <path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M213.284 56.2081C213.284 54.9852 213.509 53.853 213.959 52.8112C214.409 51.7695 214.994 50.8864 215.715 50.1617C216.48 49.3918 217.358 48.803 218.348 48.3954C219.384 47.9425 220.442 47.716 221.522 47.716H250.021C251.236 47.716 252.362 47.9425 253.397 48.3954C254.432 48.8483 255.31 49.4597 256.031 50.2296C256.796 50.9543 257.381 51.8375 257.786 52.8792C258.236 53.8756 258.462 54.9173 258.462 56.0042L258.395 64.6111C258.395 65.6981 258.17 66.7398 257.72 67.7362C257.402 68.5523 256.974 69.2711 256.436 69.8927C256.468 69.9273 256.499 69.9623 256.53 69.9977C257.12 70.6309 257.553 71.4025 257.828 72.3127C258.143 73.1832 258.3 76.7442 258.3 77.694V82.0478C258.3 83.1161 258.104 84.1054 257.71 85.0155C257.317 85.9257 256.786 86.7171 256.117 87.3898C255.488 88.0229 254.721 88.5374 253.816 88.9331C252.951 89.2892 252.046 89.4673 251.102 89.4673H242.173V80.8521L248.093 80.8209V75.5503H221.456C220.375 75.5503 219.317 75.3238 218.282 74.8709C217.291 74.4633 216.414 73.8745 215.648 73.1046C214.928 72.3799 214.343 71.4967 213.893 70.455C213.442 69.4133 213.217 68.281 213.217 67.0582L213.284 56.2081ZM246.779 58.1045V64.8982H224.966V58.1045H246.779Z"
//         fill="#E5E1E6"
//       />
//       <path
//         d="M223.747 80.8521V89.4675H213.217V76.8757C213.217 76.8757 215.192 80.8521 220.456 80.8521H223.747Z"
//         fill="#E5E1E6"
//       />
//     </svg>
//   </LogoWrapper>
// ));
//
// export default Logo;
