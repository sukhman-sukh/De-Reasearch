var paperInfo = artifacts.require("PublishPaper");

module.exports = function(deployer) {
  deployer.deploy(paperInfo);
};