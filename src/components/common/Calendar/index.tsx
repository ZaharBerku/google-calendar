import { ContainerCalendar, WrapperCalendar } from './index.styled';
import { CalendarHeader } from './CalendarHeader';
import { CalendarBody } from './CalendarBody';

const Calendar = () => {
    return (
        <ContainerCalendar>
            <WrapperCalendar>
                <CalendarHeader/>
                <CalendarBody/>
            </WrapperCalendar>
        </ContainerCalendar>
    )
};

export { Calendar };