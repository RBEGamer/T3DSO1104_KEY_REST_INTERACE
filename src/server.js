const request = require('request');


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function vpbc(buttonid, _cb) {
    if (!buttonid){return;}
    var scpicmd = "";
    if (buttonid == "menu_on_off")
        scpicmd = "$$SY_FP 0,1";
    else if (buttonid == "child1")
        scpicmd = "$$SY_FP 1,1";
    else if (buttonid == "child2")
        scpicmd = "$$SY_FP 2,1";
    else if (buttonid == "child3")
        scpicmd = "$$SY_FP 3,1";
    else if (buttonid == "child4")
        scpicmd = "$$SY_FP 4,1";
    else if (buttonid == "child5")
        scpicmd = "$$SY_FP 5,1";
    else if (buttonid == "child6")
        scpicmd = "$$SY_FP 6,1";
    else if (buttonid == "print")
        scpicmd = "$$SY_FP 25,1";
    else if (buttonid == "cursors")
        scpicmd = "$$SY_FP 22,1";
    else if (buttonid == "acquire")
        scpicmd = "$$SY_FP 27,1";
    else if (buttonid == "save_recall")
        scpicmd = "$$SY_FP 28,1";
    else if (buttonid == "clear_sweeps")
        scpicmd = "$$SY_FP 47,1";
    else if (buttonid == "run_stop")
        scpicmd = "$$SY_FP 12,1";
    else if (buttonid == "adjust_forward")
        scpicmd = "$$SY_FP 15,-1";
    else if (buttonid == "adjust_press")
        scpicmd = "$$SY_FP 15,0";
    else if (buttonid == "adjust_revese")
        scpicmd = "$$SY_FP 15,1";
    else if (buttonid == "measure")
        scpicmd = "$$SY_FP 26,1";
    else if (buttonid == "display")
        scpicmd = "$$SY_FP 23,1";
    else if (buttonid == "utility")
        scpicmd = "$$SY_FP 24,1";
    else if (buttonid == "decode")
        scpicmd = "$$SY_FP 29,1";
    else if (buttonid == "auto_setup")
        scpicmd = "$$SY_FP 11,1";
    else if (buttonid == "navigate")
        scpicmd = "$$SY_FP 51,1";
    else if (buttonid == "navigate_left")
        scpicmd = "$$SY_FP 52,1";
    else if (buttonid == "navigate_mid")
        scpicmd = "$$SY_FP 53,1";
    else if (buttonid == "navigate_right")
        scpicmd = "$$SY_FP 54,1";
    else if (buttonid == "history")
        scpicmd = "$$SY_FP 48,1";
    else if (buttonid == "default")
        scpicmd = "$$SY_FP 13,1";
    else if (buttonid == "channel1")
        scpicmd = "$$SY_FP 39,1";
    else if (buttonid == "channel2")
        scpicmd = "$$SY_FP 40,1";
    else if (buttonid == "channel3")
        scpicmd = "$$SY_FP 41,1";
    else if (buttonid == "channel4")
        scpicmd = "$$SY_FP 42,1";
    else if (buttonid == "gigital")
        scpicmd = "$$SY_FP 30,1";
    else if (buttonid == "vertical_forward")
        scpicmd = "$$SY_FP 35,-1";
    else if (buttonid == "vertical_press")
        scpicmd = "$$SY_FP 35,0";
    else if (buttonid == "vertical_revese")
        scpicmd = "$$SY_FP 35,1";
    else if (buttonid == "math")
        scpicmd = "$$SY_FP 31,1";
    else if (buttonid == "ref")
        scpicmd = "$$SY_FP 32,1";
    else if (buttonid == "v_pos_forward")
        scpicmd = "$$SY_FP 43,-1";
    else if (buttonid == "v_pos_press")
        scpicmd = "$$SY_FP 43,0";
    else if (buttonid == "v_pos_revese")
        scpicmd = "$$SY_FP 43,1";
    else if (buttonid == "hori_forward")
        scpicmd = "$$SY_FP 7,-1";
    else if (buttonid == "hori_press")
        scpicmd = "$$SY_FP 7,0";
    else if (buttonid == "hori_revese")
        scpicmd = "$$SY_FP 7,1";
    else if (buttonid == "roll")
        scpicmd = "$$SY_FP 49,1";
    else if (buttonid == "search")
        scpicmd = "$$SY_FP 50,1";
    else if (buttonid == "h_pos_forward")
        scpicmd = "$$SY_FP 10,-1";
    else if (buttonid == "h_pos_press")
        scpicmd = "$$SY_FP 10,0";
    else if (buttonid == "h_pos_revese")
        scpicmd = "$$SY_FP 10,1";
    else if (buttonid == "trigger_setup")
        scpicmd = "$$SY_FP 18,-1";
    else if (buttonid == "trigger_auto")
        scpicmd = "$$SY_FP 17,-1";
    else if (buttonid == "trigger_normal")
        scpicmd = "$$SY_FP 19,-1";
    else if (buttonid == "trigger_single")
        scpicmd = "$$SY_FP 20,-1";
    else if (buttonid == "level_forward")
        scpicmd = "$$SY_FP 16,-1";
    else if (buttonid == "level_press")
        scpicmd = "$$SY_FP 16,0";
    else if (buttonid == "level_revese")
        scpicmd = "$$SY_FP 16,1";
    ecp(scpicmd, _cb);

}


var dso_ip = "192.168.1.61";




function ecp(_scp, _cb){
request.post("http://"+dso_ip+"/device_read_write.php", {
    form: {
        action: 'excutescpicmds',
        cmd: JSON.stringify( {cmd:_scp,type:"ds",to:"127.0.0.1"}),
    },
    json: true
}, function (err, res, body) {
        console.log(body);
    _cb(body);
   
});
}






//vpbc("default", function (_b) { console.log(_b); });



setTimeout(function () { vpbc("channel3", function (_b) { console.log(_b); })}, 3500);
setTimeout(function () { vpbc("trigger_single", function (_b) { console.log(_b); }); }, 4000);
setTimeout(function () { vpbc("save_recall", function (_b) { console.log(_b); }); }, 4500);
setTimeout(function () { vpbc("child1", function (_b) { console.log(_b); }); }, 5000);
setTimeout(function () { vpbc("child5", function (_b) { console.log(_b); }); }, 5500);
setTimeout(function () { vpbc("child5", function (_b) { console.log(_b); }); }, 6000);
setTimeout(function () { vpbc("child6", function (_b) { console.log(_b); }); }, 6500);
setTimeout(function () { vpbc("child6", function (_b) { console.log(_b); }); }, 7000);
setTimeout(function () { vpbc("menu_on_off", function (_b) { console.log(_b); }); }, 7500);
setTimeout(function () { vpbc("run_stop", function (_b) { console.log(_b); }); }, 8000);