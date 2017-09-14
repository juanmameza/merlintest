export interface Data2 {
    banner_img: string;
    user_sr_theme_enabled: boolean;
    user_flair_text?: any;
    submit_text_html: string;
    user_is_banned?: any;
    wiki_enabled: boolean;
    show_media: boolean;
    id: string;
    display_name_prefixed: string;
    submit_text: string;
    user_can_flair_in_sr?: any;
    display_name: string;
    header_img: string;
    description_html: string;
    title: string;
    collapse_deleted_comments: boolean;
    user_has_favorited?: any;
    over18: boolean;
    public_description_html: string;
    spoilers_enabled: boolean;
    icon_size: number[];
    audience_target: string;
    suggested_comment_sort: string;
    active_user_count?: any;
    icon_img: string;
    header_title: string;
    description: string;
    user_is_muted?: any;
    submit_link_label: string;
    accounts_active?: any;
    public_traffic: boolean;
    header_size: number[];
    subscribers: number;
    user_flair_css_class?: any;
    submit_text_label: string;
    whitelist_status: string;
    user_sr_flair_enabled?: any;
    lang: string;
    user_is_moderator?: any;
    is_enrolled_in_new_modmail?: any;
    key_color: string;
    name: string;
    user_flair_enabled_in_sr: boolean;
    created: number;
    url: string;
    quarantine: boolean;
    hide_ads: boolean;
    created_utc: number;
    banner_size: number[];
    user_is_contributor?: any;
    accounts_active_is_fuzzed: boolean;
    advertiser_category: string;
    public_description: string;
    link_flair_enabled: boolean;
    allow_images: boolean;
    show_media_preview: boolean;
    comment_score_hide_mins: number;
    subreddit_type: string;
    submission_type: string;
    user_is_subscriber?: any;
    allow_videos?: boolean;
  }
  
  export interface Child {
    kind: string;
    data: Data2;
  }
  
  export interface Data {
    modhash: string;
    children: Child[];
    after: string;
    before?: any;
  }
  
  export interface RootObject {
    kind: string;
    data: Data;
  }