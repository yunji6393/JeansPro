package com.project.jeans.domain.mypage.dto;

import lombok.Data;

import java.util.Date;

@Data
public class MyPageDTO {
    private int mypage_no;
    private String mypage_content;
    private Date mypage_regdate;
    private String member_id;
    private int board1_no;
    private int board2_no;
    private int board3_no;
    private int board4_no;
    private String board1_title;
    private String board2_title;
    private String board3_title;
    private String board4_title;

}


