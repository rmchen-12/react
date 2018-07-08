const fs = require("fs");

let database = null;

let readFileData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./public/database/database.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        reject("read fileData error!");
      } else {
        data = JSON.parse(data);
        database = data;
        resolve();
      }
    });
  });
};

let getFileName = (path, fileClass) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject("read fileName err!");
      } else {
        files = files.map(file => {
          return `http://localhost:3000/images/${fileClass}/${file}`;
        });
        resolve(files);
      }
    });
  });
};

let imgNames = [];
let appNames = [];
let spikeNames = [];
let moreNames = [];
let likeNames = [];

readFileData().then(() => {
  getFileName("./public/images/swiper", "swiper").then(
    files => {
      imgNames = files;
    },
    () => {
      console.log(err);
      imgNames = false;
    }
  );
});

readFileData().then(() => {
  getFileName("./public/images/like", "like").then(
    files => {
      likeNames = files;
    },
    () => {
      console.log(err);
      likeNames = false;
    }
  );
});

readFileData().then(() => {
  getFileName("./public/images/more", "more").then(
    files => {
      moreNames = files;
    },
    () => {
      console.log(err);
      moreNames = false;
    }
  );
});

readFileData().then(() => {
  getFileName("./public/images/spike", "spike").then(
    files => {
      spikeNames = files;
    },
    () => {
      console.log(err);
      spikeNames = false;
    }
  );
});

readFileData().then(() => {
  getFileName("./public/images/otherapp", "otherapp").then(
    files => {
      appNames = files;
    },
    () => {
      console.log(err);
      appNames = false;
    }
  );
});

exports.swiper = async (ctx, next) => {
  const sendData = {
    status: 0,
    msg: "",
    data: ""
  };
  if (imgNames) {
    sendData.status = 1;
    sendData.msg = "success";
    sendData.data = imgNames;
  } else {
    sendData.msg = "error";
  }
  const json = JSON.stringify(sendData);
  ctx.body = json;
};

exports.otherapp = async (ctx, next) => {
  const sendData = {
    status: 0,
    msg: "",
    data: ""
  };
  if (appNames) {
    sendData.status = 1;
    sendData.msg = "success";
    sendData.data = appNames;
  } else {
    sendData.msg = "error";
  }
  const json = JSON.stringify(sendData);
  ctx.body = json;
};

exports.spike = async (ctx, next) => {
  const sendData = {
    status: 0,
    msg: "",
    data: ""
  };
  if (spikeNames) {
    sendData.status = 1;
    sendData.msg = "success";
    sendData.data = spikeNames;
  } else {
    sendData.msg = "error";
  }
  const json = JSON.stringify(sendData);
  ctx.body = json;
};

exports.more = async (ctx, next) => {
  const sendData = {
    status: 0,
    msg: "",
    data: ""
  };
  if (moreNames) {
    sendData.status = 1;
    sendData.msg = "success";
    sendData.data = moreNames;
  } else {
    sendData.msg = "error";
  }
  const json = JSON.stringify(sendData);
  ctx.body = json;
};

exports.like = async (ctx, next) => {
  const sendData = {
    status: 0,
    msg: "",
    data: ""
  };
  if (likeNames) {
    sendData.status = 1;
    sendData.msg = "success";
    sendData.data = likeNames;
  } else {
    sendData.msg = "error";
  }
  const json = JSON.stringify(sendData);
  ctx.body = json;
};
