const MessageList = ({ selectedDate }) => {
  return (
    <div>
      {selectedDate ? (
        <>
          <h2>Messages for {selectedDate.toDateString()}</h2>
          {/* 메시지 목록 표시 */}
        </>
      ) : (
        <p>Select a date to see messages.</p>
      )}
    </div>
  );
};
