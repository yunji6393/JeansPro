package com.project.jeans.domain.board.board2.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Board2DTO {

    private int board2_no;
    private String board2_title;
    private String board2_content;
    private Timestamp board2_regdate;
    private String board2_isshow;
    private String member_id;

}