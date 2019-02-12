import ExtendableError from '../../errors/extendableError';

export class IncorrectSlackAPITokenOrFaileAPI extends ExtendableError {
  constructor(apiUrl: string) {
    super(
      `${apiUrl}: Slack API Tokenが正しくないか、APIを叩くのに失敗しました。`
    );
  }
}

export class NotSetSlackAPIToken extends ExtendableError {
  constructor() {
    super('Slack API Tokenが正しく設定されていません。');
  }
}

export class NotSetSlackIncomingURL extends ExtendableError {
  constructor() {
    super('Slack Incoming Webhooks URLが正しく設定されていません。');
  }
}
