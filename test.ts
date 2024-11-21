let index = 0
let target_num = 0

Sentry1.Begin(sentry1_mode_e.kI2CMode, sentry1_addr_e.ADDR1)
Sentry1.VisionSetStatus(Sentry1Status.Enable, sentry1_vision_e.kVisionCard)
Sentry1.LedSetColor(sentry1_led_color_e.kLedYellow, sentry1_led_color_e.kLedGreen)

basic.forever(function () {
    target_num = Sentry1.Detected(sentry1_vision_e.kVisionCard)
    serial.writeValue("target_num", target_num)
    index = 1
    for (let index2 = 0; index2 < target_num; index2++) {
        serial.writeValue("index", index)
        serial.writeValue("x", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kXValue, index))
        serial.writeValue("y", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kYValue, index))
        serial.writeValue("w", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kWidthValue, index))
        serial.writeValue("h", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kWidthValue, index))
        serial.writeValue("l", Sentry1.GetValue(sentry1_vision_e.kVisionCard, sentry1_gen_info_e.kLabel, index))
        index += 1
    }
})