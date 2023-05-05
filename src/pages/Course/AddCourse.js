import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: transparent;
  border-radius: 20px;
  box-shadow: 0 0 10px black;
  width: 50vw;
  height: 70vh;
  position: relative;
  left: 30%;
  top: 100px;
  input {
    width: 500px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: rgb(238, 238, 238);
  }
`;
const Title = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 37%;
  top: 50px;
`;
const Button = styled.button`
  position: absolute;
  left: 30%;
  top: 85%;
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  width: max-content;
  padding: 12px 80px;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    letter-spacing: 2px;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
`;
const AddCourse = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [teacherCode, setTeacherCode] = useState("");
  const handleTeacher = (e) => {
    setTeacherCode(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCourse = (e) => {
    e.preventDefault();
    console.log({ name, teacherCode });
    axios
      .post("http://localhost:4000/api/v1/courses", {
        name: name,
        teacherCode: teacherCode,
      })
      .then((result) => {
        console.log(result);
        navigate("/course");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <Container>
      <Table>
        <Title>Thêm khoá học</Title>
        <tr>
          <th>Mã giáo viên</th>
          <td>: </td>
          <input
            type="text"
            placeholder="Mã giáo viên"
            value={teacherCode}
            onChange={handleTeacher}
          />
        </tr>
        <tr>
          <th>Tên khoá học</th>
          <td>: </td>
          <input
            type="text"
            placeholder="Tên khoá học"
            value={name}
            onChange={handleName}
          />
        </tr>
        <Button onClick={handleCourse}>Hoàn thành</Button>
      </Table>
    </Container>
  );
};

export default AddCourse;
