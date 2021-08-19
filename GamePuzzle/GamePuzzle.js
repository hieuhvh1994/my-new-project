let imgs_1 = ["img/funny-cat1_part1x1.jpg", "img/monkey_part1x1.jpg", "img/panda_swap_part1x1.jpg"]
let imgs_2 = ["img/funny-cat1_part2x1.jpg", "img/monkey_part2x1.jpg", "img/panda_swap_part2x1.jpg"]
let imgs_3 = ["img/funny-cat1_part3x1.jpg", "img/monkey_part3x1.jpg", "img/panda_swap_part3x1.jpg"]
let imgs_4 = ["img/funny-cat1_part4x1.jpg", "img/monkey_part4x1.jpg", "img/panda_swap_part4x1.jpg"]
let imgs_5 = ["img/funny-cat1_part5x1.jpg", "img/monkey_part5x1.jpg", "img/panda_swap_part5x1.jpg"]



function changeSrc(pos) {
    document.getElementById("body").style = "background-color: white";
    document.getElementById("result").innerHTML = ""

    let id_image = "";
    let imgs = [];

    switch (pos) {
        case (1):
            id_image = "img1";
            imgs = imgs_1;
            break;

        case (2):
            id_image = "img2";
            imgs = imgs_2;
            break;

        case (3):
            id_image = "img3";
            imgs = imgs_3;
            break;

        case (4):
            id_image = "img4";
            imgs = imgs_4;
            break;

        case (5):
            id_image = "img5";
            imgs = imgs_5;
            break;

    }


    let current_pos = 0;
    let a = document.getElementById(id_image)
    let current_image = a.getAttribute("src")
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i] === current_image) {
            current_pos = i
        }
    }

    switch (current_pos) {
        case (2):
            current_pos = 0;
            a.src = imgs[current_pos];
            break;
        default:
            ++current_pos
            a.src = imgs[current_pos]
    }

        test_result()
}

function test_result() {
    let images_current_pos = [];

    let img1_result = document.getElementById("img1").getAttribute("src")
    let img2_result = document.getElementById("img2").getAttribute("src")
    let img3_result = document.getElementById("img3").getAttribute("src")
    let img4_result = document.getElementById("img4").getAttribute("src")
    let img5_result = document.getElementById("img5").getAttribute("src")

    for (let i=0; i< 3; i++) {
        if (img1_result === imgs_1[i]) {
            images_current_pos.push(i)
        }
        if (img2_result === imgs_2[i]) {
            images_current_pos.push(i)
        }
        if (img3_result === imgs_3[i]) {
            images_current_pos.push(i)
        }
        if (img4_result === imgs_4[i]) {
            images_current_pos.push(i)
        }
        if (img5_result === imgs_5[i]) {
            images_current_pos.push(i)
        }
    }

    const allEqual = arr => arr.every(v => v === arr[0])
    let check_result = allEqual(images_current_pos)

    if (check_result === true) {
        document.getElementById("body").style = "background-color: #BD7070FF";
        document.getElementById("result").innerHTML = "ALL MATCHED!"
    }

}




function init() {
    let random_num = Math.floor(Math.random()*3)
    document.getElementById("img1").src = imgs_1[random_num]

    random_num = Math.floor(Math.random()*3)
    document.getElementById("img2").src = imgs_2[random_num]

    random_num = Math.floor(Math.random()*3)
    document.getElementById("img3").src = imgs_3[random_num]

    random_num = Math.floor(Math.random()*3)
    document.getElementById("img4").src = imgs_4[random_num]

    random_num = Math.floor(Math.random()*3)
    document.getElementById("img5").src = imgs_5[random_num]
}

window.onload = init()