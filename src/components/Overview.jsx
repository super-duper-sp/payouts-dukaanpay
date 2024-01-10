import React from 'react'

const Overview = () => {
  return (
    <div className="self-stretch flex flex-col items-start  justify-start gap-[24px] text-left text-xl text-black-12 font-body-2-medium">
      <div className="self-stretch flex flex-row items-center  justify-between">
        <div className="relative leading-[28px] font-medium">Overview</div>
        <div className="shrink-0 flex flex-row items-center justify-start text-base text-black-30">
          <div className="relative w-[137px] h-9">
            <div className="absolute top-[0px] left-[0px] rounded bg-[white] box-border w-[137px] h-9 border-[1px] border-solid border-black-85" />
            <a href="">
            <div className="absolute top-[6px] left-[14px] leading-[24px]">
              This Month
            </div>
            </a>
            <img
              className="absolute top-[10px] left-[107px] w-4 h-4 overflow-hidden object-cover"
              alt=""
              src="/arrowdown.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-base text-[white] ">
        <div className="flex-1 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-center justify-center relative text-black-100">
          <div className="self-stretch rounded bg-[#146EB4] h-[154px] flex flex-col items-start justify-start p-5 box-border z-[0]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative   leading-[24px]">Next Payout</div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/question.png"
                  />
                </div>
                <div className="relative text-sm leading-[20px] font-body-2-medium hidden">
                  {" "}
                  by Today, 04:00 PM
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-xl font-body-2-medium">
                <div className="relative leading-[38px] font-medium">
                  ₹2,312.23
                </div>
                <div className="shrink-0 flex flex-row items-center justify-start text-base">
                  <a href="">
                  <div className="text-white shrink-0 flex flex-row items-start justify-start">
                    <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                      23 orders
                    </div>
                  </div>
                  </a>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/arrowrightwhite.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[118px] left-[0px] rounded-lg bg-[#0E4F82] w-full flex flex-row items-start justify-between py-3 px-6 box-border z-[1] text-sm text-[white] font-body-2-medium">
            <div className="relative leading-[20px]">Next payout date:</div>
            <div className="relative leading-[20px] font-medium">
              Today, 04:00PM
            </div>
          </div>
        </div>
        <div className="flex-1 shrink-0 flex flex-row items-center  justify-center">
          <div className="flex-1 rounded bg-[white] shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-start justify-start p-5">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="flex text-[#4D4D4D] flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[24px]">Amount Pending</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/questionblack.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-xl text-black font-body-2-medium">
                <div className="relative leading-[38px] font-medium">
                  ₹92,312.20
                </div>
                <div className="shrink-0 flex flex-row items-center justify-start text-base text-primary-blue">
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <a href="">
                    <div className="text-[#146EB4] relative [text-decoration:underline] leading-[24px] font-small">
                      13 orders
                    </div>
                    </a>
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/arrowrightblue.png"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 shrink-0 flex flex-row items-center justify-center">
          <div className="flex-1 rounded bg-[white] shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] flex flex-col items-start justify-start p-5">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="flex text-[#4D4D4D] flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[24px]">Amount Processed</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/questionblack.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-xl text-black font-body-2-medium">
                <div className="flex-1 shrink-0 flex flex-row items-center justify-between">
                  <div className="relative leading-[38px] font-medium">
                    ₹23,92,312.19
                  </div>
                  <div className="shrink-0 hidden flex-row items-start justify-start text- text-primary-blue">
                    <div className="relative [text-decoration:underline] leading-[20px] font-medium">
                      View 23 orders
                    </div>
                  </div>
                </div>
                <div className="shrink-0 hidden flex-row items-center justify-start text-base text-primary-blue">
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                      3,231 orders
                    </div>
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/arrowright.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Overview