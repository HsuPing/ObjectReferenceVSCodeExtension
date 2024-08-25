# ObjectReference 快速綁定工具

## 概述
ObjectReference 快速綁定工具簡化了在 Unity 中將 UI 元件和其他欄位綁定到 ObjectReferences 的過程。此工具會自動生成必要的初始化代碼，並直接複製到剪貼板，讓你能輕鬆地將代碼貼上到腳本中。

## 使用方式
1. 選取 需要綁定 ObjectReference 的欄位或屬性。
2. 觸發 轉換，使用預設快捷鍵：
    - Windows: Ctrl+Shift+O
    - macOS: Cmd+Shift+O
3. 出現 "轉換後程式碼已複製到剪貼板!" 的通知，確認代碼已經複製。
4. 貼上生成的代碼到你的初始化方法中。

## 範例
### Input:
    // 介面基礎設置
    private Button ButtonBack;
    private TextMeshProUGUI LabelBack;
    private Button ButtonHelp;
    // 時間相關
    private TextMeshProUGUI LabelEndTime;
    private TextMeshProUGUI TextEndTime;
    // 排名相關
    private TextMeshProUGUI LabelRank;
    private TextMeshProUGUI TextRank;
    // 個人訊息相關
    private TextMeshProUGUI LabelDailyChallengeTitle;
    private TextMeshProUGUI TextArenaPoint;
    private UIItemIcon ItemReward_1;
    private UIItemIcon ItemReward_2;
    private UIItemIcon ItemReward_3;
    private Slider SliderRewardProgress;

### Output:
    ButtonBack = AddButtonClick(nameof(ButtonBack), OnClickButtonBack, obj);
    LabelBack = obj.GetComponent<TextMeshProUGUI>(nameof(LabelBack));
    ButtonHelp = AddButtonClick(nameof(ButtonHelp), OnClickButtonHelp, obj);
    LabelEndTime = obj.GetComponent<TextMeshProUGUI>(nameof(LabelEndTime));
    TextEndTime = obj.GetComponent<TextMeshProUGUI>(nameof(TextEndTime));
    LabelRank = obj.GetComponent<TextMeshProUGUI>(nameof(LabelRank));
    TextRank = obj.GetComponent<TextMeshProUGUI>(nameof(TextRank));
    LabelDailyChallengeTitle = obj.GetComponent<TextMeshProUGUI>(nameof(LabelDailyChallengeTitle));
    TextArenaPoint = obj.GetComponent<TextMeshProUGUI>(nameof(TextArenaPoint));
    ItemReward_1 = new UIItemIcon(obj.GetGameObject(nameof(ItemReward_1)));
    ItemReward_2 = new UIItemIcon(obj.GetGameObject(nameof(ItemReward_2)));
    ItemReward_3 = new UIItemIcon(obj.GetGameObject(nameof(ItemReward_3)));
    SliderRewardProgress = obj.GetComponent<Slider>(nameof(SliderRewardProgress));