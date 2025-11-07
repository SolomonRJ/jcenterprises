export interface Product {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  material: string;
  size: string;
  price: string;
  description: string;
  specifications: {
    dimensions?: string;
    gauge?: string;
    material: string;
    finish?: string;
    grade?: string;
  };
}

export const products: Product[] = [
  {
    id: "p-001",
    category: "Pipes",
    subcategory: "Round Pipe",
    title: "Round Pipe - 2 inch",
    material: "MS",
    size: "2 inch",
    price: "Enquire",
    description: "High-quality mild steel round pipe suitable for structural and industrial applications. Durable and corrosion-resistant.",
    specifications: {
      dimensions: "2 inch diameter",
      material: "Mild Steel",
      finish: "Black",
      grade: "IS 1239"
    }
  },
  {
    id: "p-002",
    category: "Sheets",
    subcategory: "CR Sheet",
    title: "Cold Rolled Sheet - 3mm",
    material: "CR",
    size: "3mm",
    price: "Enquire",
    description: "Premium cold rolled steel sheet with smooth finish. Ideal for precision manufacturing and automotive applications.",
    specifications: {
      gauge: "3mm",
      material: "Cold Rolled Steel",
      finish: "Smooth",
      dimensions: "1250mm x 2500mm"
    }
  },
  {
    id: "p-003",
    category: "Section Items",
    subcategory: "Angle",
    title: "Equal Angle 50x50x6",
    material: "MS",
    size: "50x50x6",
    price: "Enquire",
    description: "Equal angle section made from mild steel. Perfect for framework, bracing, and structural reinforcement.",
    specifications: {
      dimensions: "50mm x 50mm x 6mm",
      material: "Mild Steel",
      grade: "IS 2062",
      finish: "Mill Finish"
    }
  },
  {
    id: "p-004",
    category: "Accessories",
    subcategory: "Cutting Wheel",
    title: "Cutting Wheel 115mm",
    material: "Abrasive",
    size: "115mm",
    price: "Enquire",
    description: "Industrial-grade abrasive cutting wheel for metal cutting applications. High performance and long-lasting.",
    specifications: {
      dimensions: "115mm diameter",
      material: "Abrasive Composite",
      grade: "Premium Grade"
    }
  },
  {
    id: "p-005",
    category: "TMT Rods & Cements",
    subcategory: "High-Strength TMT Rods",
    title: "TMT 500D - 12mm",
    material: "TMT",
    size: "12mm",
    price: "Enquire",
    description: "Thermo-mechanically treated reinforcement bars with superior strength and ductility for construction projects.",
    specifications: {
      dimensions: "12mm diameter",
      material: "TMT Steel",
      grade: "Fe 500D",
      finish: "Ribbed"
    }
  },
  {
    id: "p-006",
    category: "SS Materials",
    subcategory: "SS Sheets",
    title: "SS 304 Sheet - 1mm",
    material: "SS304",
    size: "1mm",
    price: "Enquire",
    description: "Austenitic stainless steel sheet with excellent corrosion resistance. Suitable for food processing and medical equipment.",
    specifications: {
      gauge: "1mm",
      material: "Stainless Steel 304",
      finish: "2B Finish",
      dimensions: "1250mm x 2500mm"
    }
  },
  {
    id: "p-007",
    category: "Pipes",
    subcategory: "Square Tube",
    title: "Square Tube - 50x50mm",
    material: "MS",
    size: "50x50mm",
    price: "Enquire",
    description: "Structural square hollow section for modern construction and fabrication work. Strong and versatile.",
    specifications: {
      dimensions: "50mm x 50mm",
      material: "Mild Steel",
      finish: "Black",
      grade: "IS 4923"
    }
  },
  {
    id: "p-008",
    category: "Sheets",
    subcategory: "HR Sheet",
    title: "Hot Rolled Sheet - 5mm",
    material: "HR",
    size: "5mm",
    price: "Enquire",
    description: "Heavy-duty hot rolled steel sheet for industrial applications requiring high strength and durability.",
    specifications: {
      gauge: "5mm",
      material: "Hot Rolled Steel",
      finish: "Mill Scale",
      dimensions: "1500mm x 3000mm"
    }
  },
  {
    id: "p-009",
    category: "Section Items",
    subcategory: "Channel",
    title: "Channel - ISMC 100",
    material: "MS",
    size: "100mm",
    price: "Enquire",
    description: "Indian Standard Medium Channel for structural frameworks and support systems.",
    specifications: {
      dimensions: "100mm height",
      material: "Mild Steel",
      grade: "IS 2062",
      finish: "Mill Finish"
    }
  },
  {
    id: "p-010",
    category: "Accessories",
    subcategory: "Welding Rod",
    title: "Welding Rod E6013 - 3.15mm",
    material: "Electrode",
    size: "3.15mm",
    price: "Enquire",
    description: "All-position welding electrodes for mild steel. Smooth arc and easy slag removal.",
    specifications: {
      dimensions: "3.15mm x 350mm",
      material: "Electrode E6013",
      grade: "AWS A5.1"
    }
  },
  {
    id: "p-011",
    category: "Pipes",
    subcategory: "Rectangle Tube",
    title: "Rectangle Tube - 40x80mm",
    material: "MS",
    size: "40x80mm",
    price: "Enquire",
    description: "Rectangular hollow section ideal for structural frames and architectural applications.",
    specifications: {
      dimensions: "40mm x 80mm",
      material: "Mild Steel",
      finish: "Black",
      grade: "IS 4923"
    }
  },
  {
    id: "p-012",
    category: "Sheets",
    subcategory: "GI Sheet",
    title: "Galvanized Sheet - 0.8mm",
    material: "GI",
    size: "0.8mm",
    price: "Enquire",
    description: "Zinc-coated galvanized sheet with excellent corrosion protection for outdoor applications.",
    specifications: {
      gauge: "0.8mm",
      material: "Galvanized Iron",
      finish: "Zinc Coated",
      dimensions: "1000mm x 2000mm"
    }
  }
];

export const categories = [
  {
    name: "Pipes",
    subcategories: ["Round Pipe", "Square Tube", "Rectangle Tube"],
    icon: "pipe"
  },
  {
    name: "Sheets",
    subcategories: ["CR Sheet", "HR Sheet", "GI Sheet"],
    icon: "sheet"
  },
  {
    name: "Section Items",
    subcategories: ["Angle", "Channel", "I-Beam", "Flat", "Square Rod", "Round Rod"],
    icon: "section"
  },
  {
    name: "Accessories",
    subcategories: ["Cutting Wheel", "Grinding Wheel", "Flap Disc", "CO2 Coil", "Welding Rod", "Stretch Film"],
    icon: "accessories"
  },
  {
    name: "TMT Rods & Cements",
    subcategories: ["High-Strength TMT Rods", "Premium Grade Cement"],
    icon: "tmt"
  },
  {
    name: "SS Materials",
    subcategories: ["Stainless Steel Pipes", "SS Sheets", "SS Rods"],
    icon: "stainless"
  }
];
