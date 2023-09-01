package com.project.jeans.domain.calendar.dao;

import com.project.jeans.domain.calendar.dto.CalendarDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CalendarDAO {

    public List<CalendarDTO> selectCalendar(String member_id);
    public int insertEvent(CalendarDTO calendarDTO);
}
