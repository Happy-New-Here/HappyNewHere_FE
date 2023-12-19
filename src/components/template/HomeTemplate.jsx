import GiftBox from "../common/GiftBox";
import MessageList from "../organisms/Message/MessageList";
import MessageViewOrganism from "../organisms/Message/MessageViewOrganism";
import { Calendar } from "../common/Calendar";

const HomeTemplate = () => {
  let weekDates = Calendar.getWeekDates(25); // 이벤트 시작날짜 설정
  const [selectedDate, setSelectedDate] = useState(null);
import Footer from "../common/Footer";

const HomeTemplate = () => {
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  let weekDates = Calendar.getWeekDates(25); // 이벤트 시작날짜 설정
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const previousPage = useSelector((state) => state.previousPage);

  // previousPage를 홈으로 설정하는 코드
  // 최초 마운트시에(만) setPreviousPage를 디스패치
  useEffect(() => {
    dispatch(setPreviousPage("/"));
  }, [dispatch]);

  // 로컬스토리지에 previousPage 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
  useEffect(() => {
    localStorage.setItem("previousPage", JSON.stringify(previousPage));
  }, [previousPage]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      홈 템플릿입니다.
      <Calendar.wrapper>
        {weekDates.map((date, index) => (
          <Calendar.item
            key={index}
            day={date.getDay()}
            date={date.getDate()}
            onClick={() => handleDateClick(date)}
          />
        ))}
      </Calendar.wrapper>
      <GiftBox />
      {selectedDate && (
        <div>
          선택한 날짜: {selectedDate.toDateString()}
          {/* 선택한 날짜에 따른 메시지 목록 또는 내용을 여기에 표시 */}
        </div>
      )}
      <MessageViewOrganism />
      <Footer currentPage="home" isPc={isPc} />
    </>
  );
};

export default HomeTemplate;
