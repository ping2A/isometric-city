// Rendering configuration
// Set to true to use a single sprite sheet instead of individual PNG files
export const USE_TILE_RENDERER = true;

// Sprite sheet configuration
export const SPRITE_SHEET = {
  // Path to the sprite sheet
  src: '/assets/buildings/sprites.png',
  // Number of tiles per row/column (5x5 = 25 tiles)
  gridSize: 5,
  // Size of each tile in the sprite sheet (in pixels)
  // This is the size each building occupies in the sprite sheet
  tileSize: 256,
};

// The order of buildings in the sprite sheet (matches BUILDING_IMAGES order in Game.tsx)
// Row 0: residential, commercial, industrial, fire_station, hospital
// Row 1: park, park_large, tennis, police_station, school
// Row 2: university, water_tower, power_plant, stadium, space_program
// Row 3: tree, house_medium, mansion, house_small, shop_medium
// Row 4: shop_small, warehouse, factory_small, factory_medium, factory_large
export const SPRITE_ORDER = [
  'residential',
  'commercial',
  'industrial',
  'fire_station',
  'hospital',
  'park',
  'park_large',
  'tennis',
  'police_station',
  'school',
  'university',
  'water_tower',
  'power_plant',
  'stadium',
  'space_program',
  'tree',
  'house_medium',
  'mansion',
  'house_small',
  'shop_medium',
  'shop_small',
  'warehouse',
  'factory_small',
  'factory_medium',
  'factory_large',
] as const;

// Get the sprite sheet coordinates for a building type
export function getSpriteCoords(buildingKey: string): { sx: number; sy: number; sw: number; sh: number } | null {
  const index = SPRITE_ORDER.indexOf(buildingKey as typeof SPRITE_ORDER[number]);
  if (index === -1) return null;
  
  const col = index % SPRITE_SHEET.gridSize;
  const row = Math.floor(index / SPRITE_SHEET.gridSize);
  
  return {
    sx: col * SPRITE_SHEET.tileSize,
    sy: row * SPRITE_SHEET.tileSize,
    sw: SPRITE_SHEET.tileSize,
    sh: SPRITE_SHEET.tileSize,
  };
}
