package com.project.jeans.domain.mypage.dto;

import lombok.Data;

import java.util.Date;

@Data
public class EventDTO {
    private int mypage_no;
    private String mypage_content;
    private String member_id;
    private  Date mypage_regdate;

}

