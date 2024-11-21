declare const enum sentry1_vision_e {
    //% block="Color"
    kVisionColor = 1,
    //% block="Blob"
    kVisionBlob = 2,
    //% block="Ball"
    kVisionBall = 3,
    //% block="Line"
    kVisionLine = 4,
    //% block="Card"
    kVisionCard = 6,
    //% block="Body"
    kVisionBody= 7,
    //% blockHidden=true
    kVisionMaxType
}

declare const enum sentry1_mode_e {
    //% block="SerialMode"
    kSerialMode = 0,
    //% block="I2CMode"
    kI2CMode = 1,
    //% blockHidden=true 
    kUnknownMode,
}

declare const enum card_label_e {
    //% block="Forward"
    kCardForward = 1,
    //% block="Left"
    kCardLeft = 2,
    //% block="Right"
    kCardRight = 3,
    //% block="TurnAround"
    kCardTurnAround = 4,
    //% block="Park"
    kCardPark = 5
}
declare const enum color_label_e {
    //% block="Black"
    kColorBlack = 1,
    //% block="White"
    kColorWhite = 2,
    //% block="Red"
    kColorRed = 3,
    //% block="Green"
    kColorGreen = 4,
    //% block="Blue"
    kColorBlue = 5,
    //% block="Yellow"
    kColorYellow = 6,
    //% blockHidden=true
    //% block="Unkown"
    kColorUnkown = 7
}

declare const enum Sentry1Status {
    //% block="enable"
    Enable = 1,
    //% block="disable"
    Disable = 0,
}

declare const enum sentry1_obj_info_e {
    //% block="status"
    kStatus = 0,
    //% block="x position"
    kXValue = 1,
    //% block="y position"
    kYValue = 2,
    //% block="width"
    kWidthValue = 3,
    //% block="height"
    kHeightValue = 4,
    //% block="label"
    kLabel = 5,
    //% block="red channel"
    kRValue = 6,
    //% block="green channel"
    kGValue = 7,
    //% block="blue channel"
    kBValue = 8,
}

declare const enum sentry1_gen_info_e {
    //% block="horizontal"
    kXValue = 1,
    //% block="vertical"
    kYValue,
    //% block="width"
    kWidthValue,
    //% block="height"
    kHeightValue,
    //% block="label"
    kLabel
}

declare const enum sentry1_Line_info_e {
    //% block="X coordinate of end point"
    kXValue = 1,
    //% block="Y coordinate of end point"
    kYValue,
    //% block="X coordinate of starting point"
    kWidthValue,
    //% block="Y coordinate of starting point"
    kHeightValue,
    //% block="inclination angle"
    kLabel
}

declare const enum sentry1_qr_info_e {
    //% block="horizontal"
    kXValue = 1,
    //% block="vertical"
    kYValue,
    //% block="width"
    kWidthValue,
    //% block="height"
    kHeightValue
}

declare const enum sentry1_color_info_e {
    //% block="red channel"
    kRValue = 6,
    //% block="green channel"
    kGValue = 7,
    //% block="blue channel"
    kBValue = 8,
    //% block="label"
    kLabel = 5
}

declare const enum sentry1_addr_e {
    //% block="0x60"
    ADDR1 = 0x60,
    //% block="0x61"
    ADDR2 = 0x61,
    //% block="0x62"
    ADDR3 = 0x62,
    //% block="0x63"
    ADDR4 = 0x63,
}

declare const enum sentry1_camera_white_balance_e {
    //% block="AutoWhiteBalance"
    kAutoWhiteBalance = 0,
    //% block="LockWhiteBalance"
    kLockWhiteBalance = 1,
    //% block="WhiteLight"
    kWhiteLight = 2,
    //% block="YellowLight"
    kYellowLight = 3,
    //% blockHidden=true 
    //% block="WhiteBalanceCalibrating"
    kWhiteBalanceCalibrating = 4,
}

declare const enum sentry1_led_color_e {
    //% block="off"
    kLedClose = 0,
    //% block="red"
    kLedRed = 1,
    //% block="green"
    kLedGreen = 2,
    //% block="yellow"
    kLedYellow = 3,
    //% block="blue"
    kLedBlue = 4,
    //% block="purple"
    kLedPurple = 5,
    //% block="cyan"
    kLedCyan = 6,
    //% block="white"
    kLedWhite = 7,
}

declare const enum sentry1_ball_label_e {
    //% block="TableTennis"
    kBallTableTennis = 1,
    //% block="Tennis"
    kBallTennis = 2
}