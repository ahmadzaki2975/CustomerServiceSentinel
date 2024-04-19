export default function ChatBubble({ isSender, content, time, isError }) {
  if (isSender)
    return (
      <div className="w-full flex flex-row-reverse gap-4 items-center justify-start py-[7px]">
        {/* <div className="size-[44px] bg-gradient-to-br from-dark-brown to-light-yellow rounded-full" /> */}
        <div className="bg-light-yellow py-[10px] px-4 rounded-[8px] max-w-[50ch] text-justify flex flex-col">
          {content}
          <span className="text-[12px] font-medium text-right">
            {time?.getHours()}:{time?.getMinutes()}
          </span>
        </div>
      </div>
    );
  return (
    <div className="w-full flex gap-4 items-start py-[7px]">
      <div className="size-[44px] flex-shrink-0 bg-gradient-to-br from-dark-brown to-light-yellow rounded-full" />
      <div
        className={
          "bg-[#EBEBEB] py-[10px] px-4 rounded-[8px] max-w-[50ch] text-justify " + (isError ? "text-red-delete" : "")
        }
      >
        {content}
      </div>
    </div>
  );
}