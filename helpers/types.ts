export type Ads = {
    current_page: number;
    data: Ad[] | undefined;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string | null
    to: number;
    total: number;
}

export type Ad = {
    additional_information: string | null;
    brand?: string | null;
    brand_id: number | null;
    brand_label?: string;
    model_label?: string;
    extras?: SortedExtraType[];
    category: number | null;
    color: number | null;
    comment: string | null;
    coupe: number | null;
    created: number | null;
    cubage: number | null;
    defaultPhoto: {
        photo: string;
    }
    photos: PhotoType[];
    email: string | null;
    fuel: number | null;
    hide_mobile: null
    id: number;
    location: string | null;
    mileage: number | null;
    mobile_number: string;
    model?: string | null;
    model_id: number | null;
    modification: string | null;
    name: string | null;
    number_of_doors: string;
    paid: number | null;
    paid_email: number | null;
    paid_expire: number | null;
    pay_id: string | null;
    power: number | null;
    premium: string | null;
    premium_expire: number | null;
    premium_start: number | null
    price: number | null;
    price_currency: string | null
    seller_name: string | null;
    status: number | null;
    title: string | null;
    top_id: string | null;
    transmision: number | null;
    uid: number | null;
    updated: number | null;
    views: number | null;
    year_of_manufacture: string | null;
};

export type Favorite = {
    brand: string | null;
    defaultPhoto: {
        photo: string
    }
    fuel: number | null;
    id: number;
    mileage: number | null;
    model: string | null;
    power: number | null;
    price: number | null;
    title: string | null;
    year_of_manufacture: string | null;
};

export type Filter = {
    category: string | undefined,
    brand: string | undefined,
    model: string | undefined,
    fuel: string | undefined,
    transmision: string | undefined,
    color: string | undefined,
    yearFrom: string | undefined,
    yearTo: string | undefined,
    coupe: string | undefined,
    priceFrom: string | undefined,
    priceTo: string | undefined,
    kmFrom: string | undefined,
    kmTo: string | undefined,
    powerFrom: string | undefined,
    powerTo: string |  undefined,
    sortBy: string | undefined,
    direction: string | undefined,
};

export type User = {
    email: string;
    id: number;
    mobile_number: string;
    status: number;
    time_signin: number;
    token: string;
    username: string;
};

export type Theme = 'light' | 'dark';

export type Message = {
    type: 'success' | 'danger' | 'warning' | 'info' | null;
    message: string | null;
};

export type Config = {
    toggleFilter: boolean;
    toggleFavorites: boolean;
    loading: boolean;
};

export type PageMenuItems = {
    step: MyAdsSteps | AccountPageSteps;
    label: string;
    adsCount?: number;
    className: string;
};

export type MyAdsSteps = 'active' | 'inactive' | 'edit' | 'edit-photos';

export type AccountPageSteps = 'private-information' | 'change-password' | 'deactive-account';

export type PostAdSteps = 'category' | 'additional-information' | 'upload-photos' | 'publication-ad';

export type CategoryType =
  | 'personal'
  | 'commercial'
  | 'moto'
  | 'accessories'
  | 'other'
  | undefined;

export type PhotoType = {
    aid: number;
    default_photo: number;
    height?: number;
    id: number;
    photo: string;
    src?: string;
    thumbnail: string | null;
    uid: number;
    width?: number;
    srcSet?: any;
    title?: string;
};

export type BrandType = {
    id: number;
    value: string;
    label: string;
};

export type ModelType = {
    id: number;
    brand_id: string;
    value: string;
    label: string;
};

export type ExtraType = {
    id: number;
    value: string;
    category_id: string;
};

export type SortedExtraType = {
    aid: number;
    extra: string;
    extra_category_id: number;
    extra_id: number;
    id: number;
    status: null;
    uid: number;
};

export type SortedExtrasType = {
    safety: SortedExtraType[];
    comfort: SortedExtraType[];
    protection: SortedExtraType[];
    exterier: SortedExtraType[];
    interier: SortedExtraType[];
  };