import React, { useEffect } from "react";
import { useLocation } from "react-router";
import keyboardAnimations from "../functions/keyboardAnimations";

const KeyboardSvg = () => {
  const location = useLocation();
  useEffect(() => {
    const intervals = keyboardAnimations();
    return () => {
      intervals.forEach((interval) => {
        clearInterval(interval);
      });
    };
  }, []);

  return (
    <svg
      width="328"
      height="328"
      viewBox="0 0 328 328"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="keyboardSvg">
        <path
          id="background"
          d="M164 328C254.575 328 328 254.575 328 164C328 73.4253 254.575 0 164 0C73.4253 0 0 73.4253 0 164C0 254.575 73.4253 328 164 328Z"
          fill="#324A5E"
        />
        <g id="keyboard">
          <path
            id="Vector"
            d="M268.57 142.112H59.4297C57.5461 142.112 55.9873 143.67 55.9873 145.554V235.705C55.9873 237.589 57.5461 239.148 59.4297 239.148H268.57C270.454 239.148 272.013 237.589 272.013 235.705V145.554C272.013 143.67 270.454 142.112 268.57 142.112Z"
            fill="white"
          />
          <g id="Group">
            <path
              id="Vector_2"
              d="M80.3438 152.049H66.5743V165.819H80.3438V152.049Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_3"
              d="M102.947 152.049H89.177V165.819H102.947V152.049Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_4"
              d="M125.614 152.049H111.845V165.819H125.614V152.049Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_5"
              d="M148.217 152.049H134.448V165.819H148.217V152.049Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_6"
              d="M170.885 152.049H157.115V165.819H170.885V152.049Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_7"
              d="M193.488 152.049H179.718V165.819H193.488V152.049Z"
              fill="#E6E9EE"
            />
          </g>
          <path
            id="Vector_8"
            d="M216.155 152.049H202.386V165.819H216.155V152.049Z"
            fill="#4CDBC4"
          />
          <path
            id="Vector_9"
            d="M238.758 152.049H224.988V165.819H238.758V152.049Z"
            fill="#FF7058"
          />
          <path
            id="Vector_10"
            d="M261.426 152.049H247.656V165.819H261.426V152.049Z"
            fill="#FFD05B"
          />
          <g id="Group_2">
            <path
              id="Vector_11"
              d="M261.426 173.158H247.656V186.928H261.426V173.158Z"
              fill="#E6E9EE"
            />
            <g id="toPress">
              <path
                id="Vector_12"
                d="M80.3438 173.158H66.5743V186.928H80.3438V173.158Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_13"
                d="M102.947 173.158H89.177V186.928H102.947V173.158Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_14"
                d="M125.614 173.158H111.845V186.928H125.614V173.158Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_15"
                d="M148.217 173.158H134.448V186.928H148.217V173.158Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_16"
                d="M170.885 173.158H157.115V186.928H170.885V173.158Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_17"
                d="M193.488 173.158H179.718V186.928H193.488V173.158Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_18"
                d="M216.155 173.158H202.386V186.928H216.155V173.158Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_19"
                d="M238.758 173.158H224.988V186.928H238.758V173.158Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_20"
                d="M80.3438 194.332H66.5743V208.101H80.3438V194.332Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_21"
                d="M102.947 194.332H89.177V208.101H102.947V194.332Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_22"
                d="M125.614 194.332H111.845V208.101H125.614V194.332Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_23"
                d="M148.217 194.332H134.448V208.101H148.217V194.332Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_24"
                d="M170.885 194.332H157.115V208.101H170.885V194.332Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_25"
                d="M193.488 194.332H179.718V208.101H193.488V194.332Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_26"
                d="M216.155 194.332H202.386V208.101H216.155V194.332Z"
                fill="#E6E9EE"
              />
              <path
                id="Vector_27"
                d="M238.758 194.332H224.988V208.101H238.758V194.332Z"
                fill="#E6E9EE"
              />
            </g>
            <path
              id="Vector_28"
              d="M80.3438 215.441H66.5743V229.21H80.3438V215.441Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_29"
              d="M102.947 215.441H89.177V229.21H102.947V215.441Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_30"
              d="M148.217 215.441H134.448V229.21H148.217V215.441Z"
              fill="#E6E9EE"
            />
            <path
              id="space"
              d="M170.885 215.441H111.845V229.21H170.885V215.441Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_31"
              d="M193.488 215.441H179.718V229.21H193.488V215.441Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_32"
              d="M216.155 215.441H202.386V229.21H216.155V215.441Z"
              fill="#E6E9EE"
            />
            <path
              id="Vector_33"
              d="M238.758 215.441H224.988V229.21H238.758V215.441Z"
              fill="#E6E9EE"
            />
          </g>
          <path
            id="Vector_34"
            d="M261.426 194.332H247.656V229.275H261.426V194.332Z"
            fill="#FF7058"
          />
          <path
            id="Vector_35"
            d="M164 145.359C162.246 145.359 160.817 143.93 160.817 142.177V126.783C160.817 115.872 169.716 106.973 180.627 106.973H217.974C225.378 106.973 231.354 100.933 231.354 93.5937C231.354 86.1893 225.313 80.2139 217.974 80.2139H132.369C121.457 80.2139 112.559 71.3156 112.559 60.404V51.0511C112.559 49.2974 113.988 47.8685 115.742 47.8685C117.495 47.8685 118.924 49.2974 118.924 51.0511V60.339C118.924 67.7434 124.965 73.7188 132.304 73.7188H217.844C228.756 73.7188 237.654 82.617 237.654 93.5287C237.654 104.44 228.756 113.339 217.844 113.339H180.497C173.093 113.339 167.118 119.379 167.118 126.718V142.112C167.183 143.93 165.754 145.359 164 145.359Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

export default KeyboardSvg;
