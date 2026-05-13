export interface Blog {
  _id: string;
  _type: "blog";
  title: string;
  continueTitle?: string;
  focusTitle?: string;
  slug: {
    current: string;
  };
  publishedAt?: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };

  excerpt?: string;
  audio?: {
    asset: {
      _ref: string;
      _type: "reference";
      url: string;
    };
  };
  body: BodySection[];
  relatedNews?: Blog[];
}

export interface BodySection {
  title?: string;
  body?: PortableTextBlock[];
  table?: {
    _type: "table";
    rows: TableRow[];
  };
  asset?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

interface TableRow {
  cells: string[];
}

export interface PortableTextChild {
  _key: string;
  _type: "span";
  text: string;
  marks: string[];
}

export interface PortableTextBlock {
  _key: string;
  _type: "block";
  style?: "normal" | "h1" | "h2" | "blockquote";
  children: PortableTextChild[];
  markDefs?: {
    _key: string;
    _type: "link";
    href: string;
  }[];
}
