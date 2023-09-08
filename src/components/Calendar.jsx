import React, { forwardRef, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko'
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid;
  background-color: rebeccapurple;
`

const CalendarContainer = styled.div`
  border: 1px solid red;
`

const Calendar = ({inline, flexedHeight, isClearable, showIcon, closeOnScroll, openToDate, modal, placeholderText, disabled, year, month, time}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  // const [dateRange, setDateRange] = useState([null, null]);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  
  const MyContainer = ({ className, children }) => {
    return (
      <Container>
        <CalendarContainer className={className}>
          <div style={{}}>{children}</div>
        </CalendarContainer>
      </Container>
    );
  };

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled
      }) => (
        <div
        style={{
          margin: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>{"<"}</button>
        <div>header custom</div>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>{">"}</button>
      </div>
      )} hader custom
      locale={ko} // 언어설정
      calendarContainer={MyContainer} // container style
      fixedHeight={flexedHeight} // 현재달의 비어있는 칸에 날짜가 자동으로 생성 => 달력 총길이 고정
      isClearable={isClearable} // 클리어 아이콘 flag
      showIcon={showIcon} // 캘린터 아이콘 flag
      closeOnScroll={closeOnScroll} // 스크롤시 달력 display flag
      customInput={<ExampleCustomInput />} // input box custom
      showMonthYearPicker={month} // month 달력으로 변경
      showYearPicker={year} // year 달력으로 변경
      showTimeSelect={time} // timeSelect 오픈
      withPortal={modal} // 모달로 띄울건지
      inline={inline}
      disabled={disabled}

      placeholderText={placeholderText}
      openToDate={openToDate ? new Date(openToDate) :  new Date()}
      todayButton="today" // bottom today button

      
      // v2
      // startDate={startDate}
      // endDate={endDate}
      // selectsRange
      // showDisabledMonthNavigation
      // onChange={(date) => setDateRange)}

      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  )
}

export default Calendar
