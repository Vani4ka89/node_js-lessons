import { Twilio } from "twilio";

import { configs } from "../configs";
import { smsTemplates } from "../constants";
import { ESmsActions } from "../enums";

class SmsService {
  constructor(
    private client = new Twilio(
      configs.TWILIO_ACCOUNT_SID,
      configs.TWILIO_TOKEN
    )
  ) {}
  public async sendSms(phone: string, action: ESmsActions) {
    try {
      const template = smsTemplates[action];
      const data = await this.client.messages.create({
        body: template,
        messagingServiceSid: configs.TWILIO_SERVICE_SID,
        to: phone,
      });
      console.log(data);
    } catch (e) {
      console.error(e.message);
    }
  }
}

export const smsService = new SmsService();
