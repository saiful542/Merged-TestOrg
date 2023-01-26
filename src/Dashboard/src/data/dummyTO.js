import axios from "axios";
// import useAuth from "../../../Hooks/useAuth";
// const { validUser } = useAuth()

// api
const fetchData = async () => {
  // await axios.post(`/https://excited-foal-raincoat.cyclic.app/dashboard/examdata` token: validUser.token)
}
// api


export const CourseData = [
  {
    CourseName: "Computer Programming",
    CourseCode: "CSE-2110",
    RoomID: 1055,
    TotatStudents: 55,
    TestTaken: 5,
  },
  {
    CourseName: "Digital Logic Design",
    CourseCode: "CSE-2868",
    RoomID: 1434,
    TotatStudents: 434,
    TestTaken: 7,
  },
  {
    CourseName: "Software Development",
    CourseCode: "CSE-3974",
    RoomID: 1987,
    TotatStudents: 987,
    TestTaken: 9,
  },
  {
    CourseName: "Computer Algorithms",
    CourseCode: "CSE-2042",
    RoomID: 1021,
    TotatStudents: 21,
    TestTaken: 5,
  },
  {
    CourseName: "Chemistry",
    CourseCode: "CSE-3128",
    RoomID: 1564,
    TotatStudents: 564,
    TestTaken: 2,
  },
  {
    CourseName: "Physics II ",
    CourseCode: "CSE-2016",
    RoomID: 1008,
    TotatStudents: 8,
    TestTaken: 4,
  },
  {
    CourseName: "Database Management Systems ",
    CourseCode: "CSE-2324",
    RoomID: 1162,
    TotatStudents: 162,
    TestTaken: 8,
  },
  {
    CourseName: "Theory of Computing",
    CourseCode: "CSE-2944",
    RoomID: 1472,
    TotatStudents: 472,
    TestTaken: 3,
  },
  {
    CourseName: "Data Communication",
    CourseCode: "CSE-2458",
    RoomID: 1229,
    TotatStudents: 229,
    TestTaken: 5,
  },
  {
    CourseName: "Compiler",
    CourseCode: "CSE-2206",
    RoomID: 1103,
    TotatStudents: 103,
    TestTaken: 15,
  },
];

export const CourseGrid = [
  {
    headerText: "Course Name",
    field: "CourseName",
    textAlign: "Center",
    width: "120",
  },
  // {
  //   field: "CourseCode",
  //   headerText: "Course Code",
  //   width: "150",
  //   textAlign: "Center",
  // },
  {
    field: "RoomID",
    headerText: "ROOM ID",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "TotatStudents",
    headerText: "Total Students",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  // {
  //   field: "TestTaken",
  //   headerText: "TEST TAKEN",
  //   width: "150",
  //   textAlign: "Center",
  // },
];

export const TotalTestGrid = [
  {
    field: "TestTitle",
    headerText: "TEST TITLE",
    width: "150",
    //template: gridEmployeeProfile,
    textAlign: "Center",
  },
  {
    field: "Name",
    headerText: "",
    width: "0",
    textAlign: "Center",
  },
  {
    field: "RoomName",
    headerText: "ROOM NAME",
    width: "170",
    textAlign: "Center",
  },
  {
    field: "RoomID",
    headerText: "ROOM ID",
    width: "125",
    textAlign: "Center",
  },
  {
    field: "TestDate",
    headerText: "DATE",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },
  {
    field: "TestTime",
    headerText: "TIME",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },
  {
    field: "participants",
    headerText: "participants",
    width: "125",
    textAlign: "Center",
  },
];


export const TestData = [
  {
    TestTitle: "Erma",
    RoomName: "Software Development",
    RoomID: "CSE-3128",
    TestDate: "22-01-2016 T 12:34:55",
    TestTime: "01:01:51",
    participants: 21,
  },
  {
    TestTitle: "Johns",
    RoomName: "Digital Logic Design",
    RoomID: "CSE-3974",
    TestDate: "23-07-2019 T 01:14:43",
    TestTime: "08:11:00",
    participants: 28,
  },
  {
    TestTitle: "Rosella",
    RoomName: "Compiler",
    RoomID: "CSE-2944",
    TestDate: "18-05-2016 T 12:15:44",
    TestTime: "03:47:39",
    participants: 28,
  },
  {
    TestTitle: "Reba",
    RoomName: "Chemistry",
    RoomID: "CSE-2944",
    TestDate: "27-01-2018 T 10:07:11",
    TestTime: "09:29:47",
    participants: 20,
  },
  {
    TestTitle: "Ina",
    RoomName: "Software Development",
    RoomID: "CSE-3974",
    TestDate: "24-06-2021 T 09:11:55",
    TestTime: "01:36:24",
    participants: 26,
  },
  {
    TestTitle: "Atkins",
    RoomName: "Computer Programming",
    RoomID: "CSE-2016",
    TestDate: "31-05-2018 T 12:14:43",
    TestTime: "09:46:02",
    participants: 39,
  },
  {
    TestTitle: "Mccarthy",
    RoomName: "Computer Programming",
    RoomID: "CSE-3128",
    TestDate: "02-06-2014 T 01:43:19",
    TestTime: "06:36:39",
    participants: 23,
  },
  {
    TestTitle: "Keith",
    RoomName: "Physics",
    RoomID: "CSE-2944",
    TestDate: "04-12-2014 T 12:49:57",
    TestTime: "06:12:20",
    participants: 34,
  },
  {
    TestTitle: "Janis",
    RoomName: "Theory of Computing",
    RoomID: "CSE-2206",
    TestDate: "08-02-2018 T 07:53:23",
    TestTime: "07:48:06",
    participants: 33,
  },
  {
    TestTitle: "Nannie",
    RoomName: "Computer Programming",
    RoomID: "CSE-2868",
    TestDate: "01-01-2017 T 08:16:47",
    TestTime: "01:40:07",
    participants: 24,
  },
  {
    TestTitle: "Corine",
    RoomName: "Theory of Computing",
    RoomID: "CSE-2042",
    TestDate: "04-04-2022 T 04:59:27",
    TestTime: "02:17:25",
    participants: 21,
  },
  {
    TestTitle: "Joy",
    RoomName: "Data Communication",
    RoomID: "CSE-2868",
    TestDate: "26-11-2021 T 08:19:50",
    TestTime: "01:08:50",
    participants: 22,
  },
  {
    TestTitle: "Maura",
    RoomName: "Compiler",
    RoomID: "CSE-2458",
    TestDate: "14-09-2014 T 01:44:03",
    TestTime: "03:18:00",
    participants: 38,
  },
  {
    TestTitle: "Salinas",
    RoomName: "Data Communication",
    RoomID: "CSE-2016",
    TestDate: "03-01-2015 T 03:30:03",
    TestTime: "01:44:02",
    participants: 37,
  },
  {
    TestTitle: "Janette",
    RoomName: "Data Communication",
    RoomID: "CSE-2324",
    TestDate: "07-07-2019 T 12:19:28",
    TestTime: "06:28:39",
    participants: 24,
  },
];