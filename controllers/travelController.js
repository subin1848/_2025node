const Travel = require("../models/Travel");

const travelController = {
  // 여행지 목록 가져오기
  getTravelList: async (req, res) => {
    try {
      const travelList = await Travel.findAll({ attributes: ["id", "name"] });
      res.render("travel", { travelList });
    } catch (err) {
      console.error("데이터베이스 쿼리 실패", err);
      res.status(500).send("Internal Server error");
    }
  },
  // 여행지 추가 폼 렌더링
  getAddTravelForm: (req, res) => {
    res.render("addTravel");
  },
  // 여행지 게시글 추가
  getAddTravel: async (req, res) => {
    const { name } = req.body;
    try {
      await Travel.create({ name });
      res.redirect("/travel");
    } catch (err) {
      console.error("데이터베이스 쿼리 실패: ", err);
      res.status(500).send("Internal Server Error");
    }
  },
  // 해당 게시글 내용 읽기
  getTravelDetail: async (req, res) => {
    const travelId = req.params.id;
    try {
      const travel = await Travel.findByPk(travelId);
      if (!travel) {
        res.status(404).send("여행지를 찾을 수 없습니다.");
        return;
      }
      res.render("travelDetail", { travel });
    } catch (err) {
      console.error("데이터베이스 쿼리 실패", err);
      res.status(500).send("Internal Server Error");
    }
  },
  // 해당 게시글 수정 페이지로 이동
  getEditTravelForm: async (req, res) => {
    const travelId = req.params.id;
    try {
      const travel = await Travel.findByPk(travelId);
      if (!travel) {
        res.status(404).send("여행지를 찾을 수 없다.");
        return;
      }
      res.render("editTravel", { travel });
    } catch (err) {
      console.error("데이터베이스 쿼리 실패", err);
      res.status(500).send("Internal Server Error");
    }
  },
  // 해당 글 업데이트
  updateTravel: async (req, res) => {
    const travelId = req.params.id;
    const { name } = req.body;
    try {
      const travel = await Travel.findByPk(travelId);
      if (!travel) {
        res.status(404).send("여행지를 찾을 수 없다.");
        return;
      }
      await travel.update({ name });
      res.render("updateSuccess");
    } catch (err) {
      console.error("데이터베이스 쿼리 실패 : ", err);
      res.status(500).send("데이터베이스 에러");
    }
  },
  // 해당 글 삭제
  deleteTravel: async (req, res) => {
    const travelId = req.params.id;
    try {
      const travel = await Travel.findByPk(travelId);
      if (!travel) {
        res.status(404).send("여행지를 찾을 수 없다.");
        return;
      }
      await travel.destroy();
      res.render("deleteSuccess");
    } catch (err) {
      console.error("데이터베이스 쿼리 실패 : ", err);
      res.status(500).send("데이터베이스 에러");
    }
  },
};
module.exports = travelController;
