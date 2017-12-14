let sendResponse = function(res, status, data) {
    res.json({
        status: status,
        data: data
    })
};

module.exports = sendResponse;