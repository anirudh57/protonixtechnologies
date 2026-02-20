export interface PageMetadata {
  page_title: string;
  page_description: string;
  page_keyword: string;
  page_image: string;
  image_height: string;
  image_width: string;
  slug: string;
}

export interface Country {
  name: string;
  code: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  country_code: string;
  phone_no: string;
  website?: string;
  message: string;
}

export interface JobPost {
  id: number;
  title: string;
  description: string;
  requirements?: string;
  location?: string;
  type?: string;
  created_at: string;
  updated_at: string;
}


