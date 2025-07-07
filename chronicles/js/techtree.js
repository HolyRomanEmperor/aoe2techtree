const TYPES = Object.freeze({
    'BUILDING': {colour: '#ff0000', type: 'BUILDING', name: 'Building'},
    'UNIT': {colour: '#ff0000', type: 'UNIT', name: 'Unit'},
    'UNIQUEUNIT': {colour: '#703b7a', type: 'UNIQUEUNIT', name: 'Unique Unit'},
    'TECHNOLOGY': {colour: '#2c5729', type: 'TECHNOLOGY', name: 'Technology'}
});

const PREFIX = Object.freeze({
    'BUILDING': 'building_',
    'UNIT': 'unit_',
    'UNIQUEUNIT': 'unit_',
    'TECHNOLOGY': 'tech_'
});

const AGE_IMAGES = ['Archaic_Age_Chronicles.png', 'Civic_Age_Chronicles.png', 'Classical_Age_Chronicles.png', 'Imperial_Age_Chronicles.png'];

const getAgeNames = (data)=>{
    return [
        data.strings[data.age_names['Archaic Age']],
        data.strings[data.age_names['Civic Age']],
        data.strings[data.age_names['Classical Age']],
        data.strings[data.age_names['Imperial Age']],
    ];
}

const unitClasses = {
    0: '<abbr title="unused">Wonders</abbr>',
    1: 'Infantry',
    2: 'Heavy Warships',
    3: 'Base Pierce',
    4: 'Base Melee',
    5: 'Elephants',
    6: 'Unused',
    7: 'Unused',
    8: '<abbr title="except Camels">Mounted Units</abbr>',
    9: 'Unused',
    10: 'Unused',
    11: '<abbr title="except Fish Traps">All Buildings</abbr>',
    12: 'Unused',
    13: '<abbr title="except Castles and Kreposts">Stone Defense & Harbors</abbr>',
    14: 'Wolves etc.',
    15: 'All Archers',
    16: '<abbr title="except Fishing Ships">Ships</abbr>',
    17: 'High Pierce Armor Siege Units',
    18: 'Trees',
    19: 'Unique Units',
    20: 'Siege Units',
    21: '<abbr title="except Fish Traps and Wonders">Standard Buildings</abbr>',
    22: 'Walls & Gates',
    23: 'Gunpowder Units',
    24: 'Boars etc.',
    25: 'Monks',
    26: 'Castles & Kreposts',
    27: 'Spear Units',
    28: 'Mounted Archers',
    29: 'Shock Infantry',
    30: 'Camels',
    31: '<abbr title="previously used by the Leitis as armor-ignoring attack">Obsolete</abbr>',
    32: 'Condottieri',
    33: '<abbr title="no unit has this armor class">Gunpowder units secondary projectile attack</abbr>',
    34: 'Fishing Ships',
    35: 'Mamelukes',
    36: 'Heroes & Kings',
    37: 'Heavy Siege',
    38: 'Skirmishers',
    39: 'Cavalry Resistance',
    40: 'Houses',
    60: 'Light Ranged Warships',
};

const animation_duration = 50;

const UNIQUE_UNIT = 'UNIQUE UNIT';
const ELITE_UNIQUE_UNIT = 'ELITE UNIQUE UNIT';
const UNIQUE_TECH_1 = 'UNIQUE TECH 1';
const UNIQUE_TECH_2 = 'UNIQUE TECH 2';
const MONK_SUFFIX_GENERIC = '_33';

const BARRACKS = 12;
const DOCK = 45;
const SIEGE_WORKSHOP = 49;
const FARM = 50;
const MILL = 68;
const HOUSE = 70;
const PALISADE_WALL = 72;
const WATCH_TOWER = 79;
const FORT = 82;
const MARKET = 84;
const ARCHERY_RANGE = 87;
const STABLE = 101;
const BLACKSMITH = 103;
const MONASTERY = 104;
const TOWN_CENTER = 109;
const STONE_WALL = 117;
const FORTIFIED_WALL = 155;
const FISH_TRAP = 199;
const UNIVERSITY = 209;
const GUARD_TOWER = 234;
const KEEP = 235;
const WONDER = 276;
const GATE = 487;
const LUMBER_CAMP = 562;
const MINING_CAMP = 584;
const OUTPOST = 598;
const TOWN_CENTER_2 = 621;
const PALISADE_GATE = 792;

const ARCHER = 4;
const HAND_CANNONEER = 5;
const ELITE_SKIRMISHER = 6;
const SKIRMISHER = 7;
const FISHING_SHIP = 13;
const TRADE_COG = 17;
const WAR_GALLEY = 21;
const CROSSBOWMAN = 24;
const KNIGHT = 38;
const CAVALRY_ARCHER = 39;
const MILITIA = 74;
const MAN_AT_ARMS = 75;
const LONG_SWORDSMAN = 77;
const VILLAGER = 83;
const SPEARMAN = 93;
const MONK = 125;
const TRADE_CART = 128;
const LONGBOAT = 250;
const SCORPION = 279;
const MANGONEL = 280;
const CAVALIER = 283;
const TREBUCHET = 331;
const PIKEMAN = 358;
const HALBERDIER = 359;
const CANNON_GALLEON = 420;
const CAPPED_RAM = 422;
const HUSSAR = 441;
const GALLEON = 442;
const SCOUT_CAVALRY = 448;
const HEAVY_CAV_ARCHER = 474;
const ARBALESTER = 492;
const DEMOLITION_SHIP = 527;
const HEAVY_DEMO_SHIP = 528;
const FIRE_SHIP = 529;
const FAST_FIRE_SHIP = 532;
const ELITE_LONGBOAT = 533;
const GALLEY = 539;
const HEAVY_SCORPION = 542;
const TRANSPORT_SHIP = 545;
const LIGHT_CAVALRY = 546;
const SIEGE_RAM = 548;
const ONAGER = 550;
const PALADIN = 569;
const ELITE_CANNON_GALLEON = 691;
const ELITE_HOPLITE = 752;
const HOPLITE = 753;
const FIRE_GALLEY = 1103;
const DEMOLITION_RAFT = 1104;
const SIEGE_TOWER = 1105;
const BATTERING_RAM = 1258;
const WAR_CHARIOT = 1370;
const ELITE_WAR_CHARIOT = 1372;
const LEGIONARY = 1793;

const TOWN_WATCH = 8;
const CROP_ROTATION = 12;
const HEAVY_PLOW = 13;
const HORSE_COLLAR = 14;
const GUILDS = 15;
const BANKING = 17;
const LOOM = 22;
const COINAGE = 23;
const HUSBANDRY = 39;
const FAITH = 45;
const DEVOTION = 46;
const CHEMISTRY = 47;
const CARAVAN = 48;
const MASONRY = 50;
const ARCHITECTURE = 51;
const TREADMILL_CRANE = 54;
const GOLD_MINING = 55;
const KEEP_TECH = 63;
const GILLNETS = 65;
const FORGING = 67;
const IRON_CASTING = 68;
const SCALE_MAIL_ARMOR = 74;
const BLAST_FURNACE = 75;
const CHAIN_MAIL_ARMOR = 76;
const PLATE_MAIL_ARMOR = 77;
const PLATE_BARDING_ARMOR = 80;
const SCALE_BARDING_ARMOR = 81;
const CHAIN_BARDING_ARMOR = 82;
const BALLISTICS = 93;
const FEUDAL_AGE = 101;
const CASTLE_AGE = 102;
const IMPERIAL_AGE = 103;
const GUARD_TOWER_TECH = 140;
const GOLD_SHAFT_MINING = 182;
const FORTIFIED_WALL_TECH = 194;
const FLETCHING = 199;
const BODKIN_ARROW = 200;
const BRACER = 201;
const DOUBLE_BIT_AXE = 202;
const BOW_SAW = 203;
const PADDED_ARCHER_ARMOR = 211;
const LEATHER_ARCHER_ARMOR = 212;
const WHEELBARROW = 213;
const SQUIRES = 215;
const RING_ARCHER_ARMOR = 219;
const TWO_MAN_SAW = 221;
const BLOCK_PRINTING = 230;
const SANCTITY = 231;
const ILLUMINATION = 233;
const HAND_CART = 249;
const FERVOR = 252;
const STONE_MINING = 278;
const STONE_SHAFT_MINING = 279;
const TOWN_PATROL = 280;
const CONSCRIPTION = 315;
const REDEMPTION = 316;
const ATONEMENT = 319;
const SAPPERS = 321;
const MURDER_HOLES = 322;
const SHIPWRIGHT = 373;
const CAREENING = 374;
const DRY_DOCK = 375;
const SIEGE_ENGINEERS = 377;
const HOARDINGS = 379;
const HEATED_SHOT = 380;
const SPIES_TREASON = 408;
const BLOODLINES = 435;
const PARTHIAN_TACTICS = 436;
const THUMB_RING = 437;
const THEOCRACY = 438;
const HERESY = 439;
const HERBAL_MEDICINE = 441;
const ARSON = 602;
const ARROWSLITS = 608;
const GAMBESONS = 875;

const BUILDING_INDEX = [
    ARCHERY_RANGE,
    BARRACKS,
    STABLE,
    SIEGE_WORKSHOP,
    BLACKSMITH,
    DOCK,
    UNIVERSITY,
    WATCH_TOWER,
    FORT,
    MONASTERY,
    TOWN_CENTER,
    MARKET
];

class Tree {
    constructor() {
        this.offsets = {
            dark_1_y: 0,
            dark_2_y: 0,
            feudal_1_y: 0,
            feudal_2_y: 0,
            castle_1_y: 0,
            castle_2_y: 0,
            imperial_1_y: 0,
            imperial_2_y: 0
        };
        this.height = Math.max(window.innerHeight - 80, 100);
        this.width = 0;
        this.padding = 20;
        this.element_height = 0;
        this.lanes = [];
        this.offset_x = 150;  // 150 is starting offset from the left to accommodate age icons
    }

    updateOffsets() {
        this.element_height = this.height / 4 / 3;
        let element_offset = this.element_height / 2;

        this.offsets.dark_1 = this.padding;
        this.offsets.dark_2 = this.offsets.dark_1 + this.element_height + element_offset;
        this.offsets.feudal_1 = this.offsets.dark_2 + this.element_height + element_offset;
        this.offsets.feudal_2 = this.offsets.feudal_1 + this.element_height + element_offset;
        this.offsets.castle_1 = this.offsets.feudal_2 + this.element_height + element_offset;
        this.offsets.castle_2 = this.offsets.castle_1 + this.element_height + element_offset;
        this.offsets.imperial_1 = this.offsets.castle_2 + this.element_height + element_offset;
        this.offsets.imperial_2 = this.offsets.imperial_1 + this.element_height + element_offset;
    }

    updatePositions() {
        for (let lane of this.lanes) {
            lane.updatePositions(this.offsets, this.element_height);
        }

        let x = this.padding + this.offset_x;
        for (let i = 0; i < this.lanes.length; i++) {
            this.lanes[i].x = x;
            x = x + this.lanes[i].width + this.padding;
        }
        this.width = x;

        for (let lane of this.lanes) {
            lane.updatePositions(this.offsets, this.element_height);
        }
    }
}

class Lane {
    constructor() {
        this.rows = {
            dark_1: [],
            dark_2: [],
            feudal_1: [],
            feudal_2: [],
            castle_1: [],
            castle_2: [],
            imperial_1: [],
            imperial_2: []
        };
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.padding = 10;
    }

    updatePositions(offsets, element_length) {
        let lane_width = 0;
        for (let r of Object.keys(this.rows)) {
            let x = this.x;
            let row_width = 0;
            for (let i = 0; i < this.rows[r].length; i++) {
                this.rows[r][i].y = offsets[r];
                this.rows[r][i].x = x;
                this.rows[r][i].width = element_length;
                this.rows[r][i].height = element_length;
                x = x + this.rows[r][i].width + this.padding;
                row_width = row_width + this.rows[r][i].width + this.padding;
            }
            lane_width = Math.max(lane_width, row_width);
        }
        this.width = lane_width;

        for (let r of Object.keys(this.rows)) {
            for (let i = 0; i < this.rows[r].length; i++) {
                if (this.rows[r][i].isBuilding()) {
                    this.rows[r][i].x = this.x + ((this.width - this.padding) / 2) - (this.rows[r][i].width / 2);
                }
            }
        }

        let connections = getConnections();
        let carets = this.nonBuildingCarets();
        for (let connection of connections) {
            let from = connection[0];
            let to = connection[1];
            let allConnectionsForFrom = connections.filter(c => c[0] === from && carets.has(c[0]) && carets.has(c[1]));
            let allRelevantTos = allConnectionsForFrom.map(c => c[1]);
            if (carets.has(from) && carets.get(from).x < Math.min(allRelevantTos.map(to_ => carets.get(to_).x))){
                carets.get(from).x = Math.min(allRelevantTos.map(to_ => carets.get(to_).x));
            }
            if (carets.has(from) && carets.get(from).x > Math.max(allRelevantTos.map(to_ => carets.get(to_).x))){
                console.assert(allRelevantTos.length === 1, `Overlapping carets: ${allRelevantTos}`)
                allRelevantTos.forEach(to_ => carets.get(to_).x = carets.get(from).x);
            }
        }
    }

    nonBuildingCarets() {
        let c = new Map();
        for (let r of Object.keys(this.rows)) {
            for (let caret of this.rows[r]) {
                if (!caret.isBuilding()) {
                    c.set(caret.id, caret);
                }
            }
        }
        return c;
    }

    caretIds() {
        const idList = [];
        for (let r of Object.keys(this.rows)) {
            for (let i = 0; i < this.rows[r].length; i++) {
                idList.push(this.rows[r][i].id);
            }
        }
        return idList;
    }
}

class Caret {
    constructor(type, name, id, colour = null) {
        this.type = type;
        this.name = name;
        this.id = PREFIX[type.type] + formatId(id);
        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = 0;
        this.colour = colour;
    }

    isBuilding() {
        return this.type === TYPES.BUILDING;
    }
}

function formatId(string) {
    return string.toString().replace(/\s/g, '_').replace(/\//g, '_').toLowerCase();
}

function checkIdUnique(tree) {
    let ids = new Set();
    for (let lane of tree.lanes) {
        for (let r of Object.keys(lane.rows)) {
            for (let caret of lane.rows[r]) {
                if (ids.has(caret.id)) {
                    console.error('ID ' + caret.id + ' is not unique!');
                }
                ids.add(caret.id);
            }
        }
    }
}

function enable(buildings, units, techs) {
    for (let item of buildings) {
        SVG('#building_' + formatId(item.id) + '_x').attr({'opacity': 0});
        SVG('#building_' + formatId(item.id) + '_disabled_gray').attr({'opacity': 0});
    }
    for (let item of units) {
        console.log(item);
        SVG('#unit_' + formatId(item.id) + '_x').attr({'opacity': 0});
        SVG('#unit_' + formatId(item.id) + '_disabled_gray').attr({'opacity': 0});
    }
    for (let item of techs) {
        SVG('#tech_' + formatId(item.id) + '_x').attr({'opacity': 0});
        SVG('#tech_' + formatId(item.id) + '_disabled_gray').attr({'opacity': 0});
    }
}

function applySelectedCiv(selectedCiv) {
    enable(selectedCiv.buildings,
        [...selectedCiv.units, {id:UNIQUE_UNIT, age: 3}, {id: ELITE_UNIQUE_UNIT, age: 4}],
        [...selectedCiv.techs, {id: UNIQUE_TECH_1, age: 3}, {id: UNIQUE_TECH_2, age: 4}]);
    unique([selectedCiv.unique.castleAgeUniqueUnit,
        selectedCiv.unique.imperialAgeUniqueUnit,
        selectedCiv.unique.castleAgeUniqueTech,
        selectedCiv.unique.imperialAgeUniqueTech], selectedCiv.monkSuffix);
}

function formatName(originalname) {
    let name = originalname.toString().replace(/<br>/g, '\n').replace(/\n+/g, '\n');
    const items = name.split('\n');
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (items[i].length > 10) {
            let space = item.indexOf(' ');
            if (space !== -1) {
                items[i] = item.slice(0, space) + '\n' + item.slice(space + 1);
                let alternativeSpace = space + 1 + item.slice(space + 1).indexOf(' ');
                if (alternativeSpace !== -1) {
                    if (Math.abs((item.length / 2) - alternativeSpace) < Math.abs((item.length / 2) - space)) {
                        items[i] = item.slice(0, alternativeSpace) + '\n' + item.slice(alternativeSpace + 1);
                    }
                }
            } else {
                let hyphen = item.indexOf('-');
                if (hyphen !== -1) {
                    items[i] = item.slice(0, hyphen) + '-\n' + item.slice(hyphen + 1);
                    let alternativeHyphen = hyphen + 1 + item.slice(hyphen + 1).indexOf('-');
                    if (alternativeHyphen !== -1) {
                        if (Math.abs((item.length / 2) - alternativeHyphen) < Math.abs((item.length / 2) - hyphen)) {
                            items[i] = item.slice(0, alternativeHyphen) + '-\n' + item.slice(alternativeHyphen + 1);
                        }
                    }
                }
            }
        }
    }
    return items.join('\n');
}

function unique(ids, monk_suffix) {
    if (monk_suffix === undefined) {
        monk_suffix = MONK_SUFFIX_GENERIC;
    }
    SVG('#unit_' + formatId(UNIQUE_UNIT) + '_text').text(formatName(data.strings[data.data.units[ids[0]].LanguageNameId]));
    SVG('#unit_' + formatId(UNIQUE_UNIT) + '_overlay').data({'name': data.strings[data.data.units[ids[0]].LanguageNameId], 'id':'unit_'+ids[0]});
    SVG('#unit_' + formatId(ELITE_UNIQUE_UNIT) + '_text').text(formatName(data.strings[data.data.units[ids[1]].LanguageNameId]));
    SVG('#unit_' + formatId(ELITE_UNIQUE_UNIT) + '_overlay').data({'name': data.strings[data.data.units[ids[1]].LanguageNameId], 'id':'unit_'+ids[1]});
    SVG('#tech_' + formatId(UNIQUE_TECH_1) + '_text').text(formatName(data.strings[data.data.techs[ids[2]].LanguageNameId]));
    SVG('#tech_' + formatId(UNIQUE_TECH_1) + '_overlay').data({'name': data.strings[data.data.techs[ids[2]].LanguageNameId], 'id':'tech_'+ids[2]});
    SVG('#tech_' + formatId(UNIQUE_TECH_2) + '_text').text(formatName(data.strings[data.data.techs[ids[3]].LanguageNameId]));
    SVG('#tech_' + formatId(UNIQUE_TECH_2) + '_overlay').data({'name': data.strings[data.data.techs[ids[3]].LanguageNameId], 'id':'tech_'+ids[3]});
    SVG('#unit_' + formatId(UNIQUE_UNIT) + '_img').load('img/Units/' + formatId(ids[0]) + '.png');
    SVG('#unit_' + formatId(ELITE_UNIQUE_UNIT) + '_img').load('img/Units/' + formatId(ids[1]) + '.png');
    SVG('#unit_' + formatId(MONK) + '_img').load('img/Units/' + '125' + monk_suffix + '.png');
}

function getName(id, itemtype) {
    //ToDo handle unique stuff properly
    if(id.toString().startsWith('UNIQUE')){
        return id;
    }
    const languageNameId = data['data'][itemtype][id]['LanguageNameId'];
    return data['strings'][languageNameId];
}

function getColour(id, itemtype) {
    const nodeType = data['data']['node_types'][itemtype][id];
    if (!nodeType) {
        return null;
    }
    return getColourForNodeType(nodeType);
}

function getColourForNodeType(nodeType) {
    switch (nodeType) {
        case 'BuildingTech':
        case 'BuildingNonTech':
            return '#b54e18';
        case 'RegionalBuilding':
            return '#cc4422';
        case 'UniqueBuilding':
            return '#d43652';
        case 'Unit':
        case 'UnitUpgrade':
            return '#00739c';
        case 'RegionalUnit':
            return '#515ae3';
        case 'UniqueUnit':
            return '#703b7a';
        case 'Technology':
            return '#397139';
        default:
            return '#ff0000';
    }
}

function building(id) {
    return new Caret(TYPES.BUILDING, getName(id, 'buildings'), id, getColour(id, 'buildings'));
}

function unit(id) {
    return new Caret(TYPES.UNIT, getName(id, 'units'), id, getColour(id, 'units'));
}

function uniqueunit(id) {
    return new Caret(TYPES.UNIQUEUNIT, getName(id, 'units'), id, getColour(id, 'units'));
}

function tech(id) {
    return new Caret(TYPES.TECHNOLOGY, getName(id, 'techs'), id);
}

function getDefaultTree() {
    let tree = new Tree();
    tree.updateOffsets();

    let archerylane = new Lane();
    archerylane.rows.feudal_1.push(building(ARCHERY_RANGE));
    archerylane.rows.feudal_2.push(unit(ARCHER));
    archerylane.rows.feudal_2.push(unit(SKIRMISHER));
    archerylane.rows.castle_1.push(unit(CROSSBOWMAN));
    archerylane.rows.castle_1.push(unit(ELITE_SKIRMISHER));
    archerylane.rows.castle_1.push(unit(CAVALRY_ARCHER));
    archerylane.rows.castle_1.push(tech(THUMB_RING));
    archerylane.rows.imperial_1.push(unit(ARBALESTER));
    archerylane.rows.imperial_1.push(unit(HAND_CANNONEER));
    archerylane.rows.imperial_1.push(unit(HEAVY_CAV_ARCHER));
    archerylane.rows.imperial_1.push(tech(PARTHIAN_TACTICS));
    tree.lanes.push(archerylane);


    let barrackslane = new Lane();
    barrackslane.rows.dark_1.push(building(BARRACKS));
    barrackslane.rows.dark_2.push(unit(MILITIA));
    barrackslane.rows.feudal_1.push(unit(MAN_AT_ARMS));
    barrackslane.rows.feudal_1.push(unit(SPEARMAN));
    barrackslane.rows.feudal_1.push(tech(ARSON));
    barrackslane.rows.castle_1.push(unit(LONG_SWORDSMAN));
    barrackslane.rows.castle_1.push(unit(PIKEMAN));
    barrackslane.rows.castle_1.push(tech(SQUIRES));
    barrackslane.rows.castle_1.push(unit(HOPLITE));
    barrackslane.rows.imperial_1.push(unit(LEGIONARY));
    barrackslane.rows.imperial_1.push(unit(HALBERDIER));
    barrackslane.rows.imperial_1.push(tech(GAMBESONS));
    barrackslane.rows.imperial_1.push(unit(ELITE_HOPLITE));
    tree.lanes.push(barrackslane);


    let stablelane = new Lane();
    stablelane.rows.feudal_1.push(building(STABLE));
    stablelane.rows.feudal_2.push(unit(SCOUT_CAVALRY));
    stablelane.rows.feudal_2.push(tech(BLOODLINES));
    stablelane.rows.castle_1.push(unit(LIGHT_CAVALRY));
    stablelane.rows.castle_1.push(unit(KNIGHT));
    stablelane.rows.castle_1.push(unit(WAR_CHARIOT));
    stablelane.rows.castle_1.push(tech(HUSBANDRY));
    stablelane.rows.imperial_1.push(unit(HUSSAR));
    stablelane.rows.imperial_1.push(unit(CAVALIER));
    stablelane.rows.imperial_1.push(unit(ELITE_WAR_CHARIOT));
    stablelane.rows.imperial_2.push(unit(PALADIN));
    tree.lanes.push(stablelane);


    let siegeworkshoplane = new Lane();
    siegeworkshoplane.rows.castle_1.push(building(SIEGE_WORKSHOP));
    siegeworkshoplane.rows.castle_2.push(unit(BATTERING_RAM));
    siegeworkshoplane.rows.castle_2.push(unit(MANGONEL));
    siegeworkshoplane.rows.castle_2.push(unit(SCORPION));
    siegeworkshoplane.rows.castle_2.push(unit(SIEGE_TOWER));
    siegeworkshoplane.rows.imperial_1.push(unit(CAPPED_RAM));
    siegeworkshoplane.rows.imperial_1.push(unit(ONAGER));
    siegeworkshoplane.rows.imperial_1.push(unit(HEAVY_SCORPION));
    siegeworkshoplane.rows.imperial_2.push(unit(SIEGE_RAM));
    tree.lanes.push(siegeworkshoplane);


    let blacksmithlane = new Lane();
    blacksmithlane.rows.feudal_1.push(building(BLACKSMITH));
    blacksmithlane.rows.feudal_2.push(tech(PADDED_ARCHER_ARMOR));
    blacksmithlane.rows.feudal_2.push(tech(FLETCHING));
    blacksmithlane.rows.feudal_2.push(tech(FORGING));
    blacksmithlane.rows.feudal_2.push(tech(SCALE_BARDING_ARMOR));
    blacksmithlane.rows.feudal_2.push(tech(SCALE_MAIL_ARMOR));
    blacksmithlane.rows.castle_1.push(tech(LEATHER_ARCHER_ARMOR));
    blacksmithlane.rows.castle_1.push(tech(BODKIN_ARROW));
    blacksmithlane.rows.castle_1.push(tech(IRON_CASTING));
    blacksmithlane.rows.castle_1.push(tech(CHAIN_BARDING_ARMOR));
    blacksmithlane.rows.castle_1.push(tech(CHAIN_MAIL_ARMOR));
    blacksmithlane.rows.imperial_1.push(tech(RING_ARCHER_ARMOR));
    blacksmithlane.rows.imperial_1.push(tech(BRACER));
    blacksmithlane.rows.imperial_1.push(tech(BLAST_FURNACE));
    blacksmithlane.rows.imperial_1.push(tech(PLATE_BARDING_ARMOR));
    blacksmithlane.rows.imperial_1.push(tech(PLATE_MAIL_ARMOR));
    tree.lanes.push(blacksmithlane);

    let docklane = new Lane();
    docklane.rows.dark_1.push(building(DOCK));
    docklane.rows.dark_2.push(unit(FISHING_SHIP));
    docklane.rows.dark_2.push(unit(TRANSPORT_SHIP));
    docklane.rows.feudal_1.push(unit(FIRE_GALLEY));
    docklane.rows.feudal_1.push(unit(TRADE_COG));
    docklane.rows.feudal_1.push(unit(DEMOLITION_RAFT));
    docklane.rows.feudal_1.push(unit(GALLEY));
    docklane.rows.castle_1.push(unit(FIRE_SHIP));
    docklane.rows.castle_1.push(tech(GILLNETS));
    docklane.rows.castle_1.push(unit(DEMOLITION_SHIP));
    docklane.rows.castle_1.push(unit(WAR_GALLEY));
    docklane.rows.castle_1.push(uniqueunit(LONGBOAT));
    docklane.rows.castle_1.push(tech(CAREENING));
    docklane.rows.imperial_1.push(unit(FAST_FIRE_SHIP));
    docklane.rows.imperial_1.push(unit(CANNON_GALLEON));
    docklane.rows.imperial_1.push(unit(HEAVY_DEMO_SHIP));
    docklane.rows.imperial_1.push(unit(GALLEON));
    docklane.rows.imperial_1.push(uniqueunit(ELITE_LONGBOAT));
    docklane.rows.imperial_1.push(tech(DRY_DOCK));
    docklane.rows.imperial_2.push(tech(SHIPWRIGHT));
    docklane.rows.imperial_2.push(unit(ELITE_CANNON_GALLEON));
    tree.lanes.push(docklane);


    let fishtraplane = new Lane();
    fishtraplane.rows.feudal_1.push(building(FISH_TRAP));
    tree.lanes.push(fishtraplane);


    let universitylane = new Lane();
    universitylane.rows.castle_1.push(building(UNIVERSITY));
    universitylane.rows.castle_2.push(tech(MASONRY));
    universitylane.rows.castle_2.push(tech(FORTIFIED_WALL_TECH));
    universitylane.rows.castle_2.push(tech(BALLISTICS));
    universitylane.rows.castle_2.push(tech(GUARD_TOWER_TECH));
    universitylane.rows.castle_2.push(tech(HEATED_SHOT));
    universitylane.rows.castle_2.push(tech(MURDER_HOLES));
    universitylane.rows.castle_2.push(tech(TREADMILL_CRANE));
    universitylane.rows.imperial_1.push(tech(ARCHITECTURE));
    universitylane.rows.imperial_1.push(tech(CHEMISTRY));
    universitylane.rows.imperial_1.push(tech(SIEGE_ENGINEERS));
    universitylane.rows.imperial_1.push(tech(KEEP_TECH));
    universitylane.rows.imperial_1.push(tech(ARROWSLITS));
    tree.lanes.push(universitylane);


    let towerlane = new Lane();
    towerlane.rows.dark_1.push(building(OUTPOST));
    towerlane.rows.feudal_1.push(building(WATCH_TOWER));
    towerlane.rows.castle_1.push(building(GUARD_TOWER));
    towerlane.rows.imperial_1.push(building(KEEP));
    tree.lanes.push(towerlane);


    let walllane = new Lane();
    walllane.rows.dark_1.push(building(PALISADE_WALL));
    walllane.rows.dark_2.push(building(PALISADE_GATE));
    walllane.rows.feudal_1.push(building(GATE));
    walllane.rows.feudal_2.push(building(STONE_WALL));
    walllane.rows.castle_1.push(building(FORTIFIED_WALL));
    tree.lanes.push(walllane);


    let castlelane = new Lane();
    castlelane.rows.castle_1.push(building(FORT));
    castlelane.rows.castle_2.push(new Caret(TYPES.UNIQUEUNIT, UNIQUE_UNIT, UNIQUE_UNIT));
    castlelane.rows.castle_2.push(tech(UNIQUE_TECH_1));
    castlelane.rows.imperial_1.push(new Caret(TYPES.UNIQUEUNIT, ELITE_UNIQUE_UNIT, ELITE_UNIQUE_UNIT));
    castlelane.rows.imperial_1.push(unit(TREBUCHET));
    castlelane.rows.imperial_1.push(tech(UNIQUE_TECH_2));
    castlelane.rows.imperial_1.push(tech(HOARDINGS));
    castlelane.rows.imperial_1.push(tech(SAPPERS));
    castlelane.rows.imperial_1.push(tech(CONSCRIPTION));
    castlelane.rows.imperial_1.push(tech(SPIES_TREASON));
    tree.lanes.push(castlelane);


    let monasterylane = new Lane();
    monasterylane.rows.castle_1.push(building(MONASTERY));
    monasterylane.rows.castle_2.push(unit(MONK));
    monasterylane.rows.castle_2.push(tech(REDEMPTION));
    monasterylane.rows.castle_2.push(tech(DEVOTION));
    monasterylane.rows.castle_2.push(tech(ATONEMENT));
    monasterylane.rows.castle_2.push(tech(HERBAL_MEDICINE));
    monasterylane.rows.castle_2.push(tech(HERESY));
    monasterylane.rows.castle_2.push(tech(SANCTITY));
    monasterylane.rows.castle_2.push(tech(FERVOR));
    monasterylane.rows.imperial_1.push(tech(ILLUMINATION));
    monasterylane.rows.imperial_1.push(tech(BLOCK_PRINTING));
    monasterylane.rows.imperial_1.push(tech(FAITH));
    monasterylane.rows.imperial_1.push(tech(THEOCRACY));
    tree.lanes.push(monasterylane);


    let houselane = new Lane();
    houselane.rows.dark_1.push(building(HOUSE));
    tree.lanes.push(houselane);

    let towncenterlane = new Lane();
    towncenterlane.rows.dark_1.push(building(TOWN_CENTER));
    towncenterlane.rows.dark_2.push(unit(VILLAGER));
    towncenterlane.rows.dark_2.push(tech(FEUDAL_AGE));
    towncenterlane.rows.dark_2.push(tech(LOOM));
    towncenterlane.rows.feudal_1.push(tech(TOWN_WATCH));
    towncenterlane.rows.feudal_1.push(tech(CASTLE_AGE));
    towncenterlane.rows.feudal_1.push(tech(WHEELBARROW));
    towncenterlane.rows.castle_1.push(tech(TOWN_PATROL));
    towncenterlane.rows.castle_1.push(tech(IMPERIAL_AGE));
    towncenterlane.rows.castle_1.push(tech(HAND_CART));
    tree.lanes.push(towncenterlane);


    let additionaltowncenterlane = new Lane();
    additionaltowncenterlane.rows.castle_1.push(building(TOWN_CENTER_2));
    tree.lanes.push(additionaltowncenterlane);


    let wonderlane = new Lane();
    wonderlane.rows.imperial_1.push(building(WONDER));
    tree.lanes.push(wonderlane);


    let miningcamplane = new Lane();
    miningcamplane.rows.dark_1.push(building(MINING_CAMP));
    miningcamplane.rows.feudal_1.push(tech(GOLD_MINING));
    miningcamplane.rows.feudal_1.push(tech(STONE_MINING));
    miningcamplane.rows.castle_1.push(tech(GOLD_SHAFT_MINING));
    miningcamplane.rows.castle_1.push(tech(STONE_SHAFT_MINING));
    tree.lanes.push(miningcamplane);


    let lumbercamplane = new Lane();
    lumbercamplane.rows.dark_1.push(building(LUMBER_CAMP));
    lumbercamplane.rows.feudal_1.push(tech(DOUBLE_BIT_AXE));
    lumbercamplane.rows.castle_1.push(tech(BOW_SAW));
    lumbercamplane.rows.imperial_1.push(tech(TWO_MAN_SAW));
    tree.lanes.push(lumbercamplane);


    let marketlane = new Lane();
    marketlane.rows.feudal_1.push(building(MARKET));
    marketlane.rows.feudal_2.push(unit(TRADE_CART));
    marketlane.rows.castle_1.push(tech(COINAGE));
    marketlane.rows.castle_1.push(tech(CARAVAN));
    marketlane.rows.imperial_1.push(tech(BANKING));
    marketlane.rows.imperial_1.push(tech(GUILDS));
    tree.lanes.push(marketlane);


    let milllane = new Lane();
    milllane.rows.dark_1.push(building(MILL));
    milllane.rows.dark_2.push(building(FARM));
    milllane.rows.feudal_1.push(tech(HORSE_COLLAR));
    milllane.rows.castle_1.push(tech(HEAVY_PLOW));
    milllane.rows.imperial_1.push(tech(CROP_ROTATION));
    tree.lanes.push(milllane);


    tree.updatePositions();

    checkIdUnique(tree);

    return tree;
}

function u(unit) {
    return 'unit_' + unit;
}

function b(building) {
    return 'building_' + building;
}

function t(tech) {
    return 'tech_' + tech;
}

function getConnections() {
    let connections = [
        [b(ARCHERY_RANGE), u(ARCHER)],
        [u(ARCHER), u(CROSSBOWMAN)],
        [u(CROSSBOWMAN), u(ARBALESTER)],
        [b(ARCHERY_RANGE), u(SKIRMISHER)],
        [u(SKIRMISHER), u(ELITE_SKIRMISHER)],
        [b(ARCHERY_RANGE), u(CAVALRY_ARCHER)],
        [u(CAVALRY_ARCHER), u(HEAVY_CAV_ARCHER)],
        [b(ARCHERY_RANGE), t(THUMB_RING)],
        [b(BARRACKS), b(ARCHERY_RANGE)],
        [b(BARRACKS), b(STABLE)],
        [b(BARRACKS), u(MILITIA)],
        [u(MILITIA), u(MAN_AT_ARMS)],
        [u(MAN_AT_ARMS), u(LONG_SWORDSMAN)],
        [u(LONG_SWORDSMAN), u(LEGIONARY)],
        [b(BARRACKS), u(SPEARMAN)],
        [u(SPEARMAN), u(PIKEMAN)],
        [u(PIKEMAN), u(HALBERDIER)],
        [b(BARRACKS), u(HOPLITE)],
        [u(HOPLITE), u(ELITE_HOPLITE)],
        [b(BARRACKS), t(ARSON)],
        [b(STABLE), u(SCOUT_CAVALRY)],
        [u(SCOUT_CAVALRY), u(LIGHT_CAVALRY)],
        [u(LIGHT_CAVALRY), u(HUSSAR)],
        [b(STABLE), t(BLOODLINES)],
        [b(STABLE), u(WAR_CHARIOT)],
        [u(WAR_CHARIOT), u(ELITE_WAR_CHARIOT)],
        [b(STABLE), t(HUSBANDRY)],
        [b(STABLE), u(KNIGHT)],
        [u(KNIGHT), u(CAVALIER)],
        [u(CAVALIER), u(PALADIN)],
        [b(DOCK), u(FISHING_SHIP)],
        [b(DOCK), u(TRANSPORT_SHIP)],
        [b(DOCK), u(DEMOLITION_RAFT)],
        [u(DEMOLITION_RAFT), u(DEMOLITION_SHIP)],
        [u(DEMOLITION_SHIP), u(HEAVY_DEMO_SHIP)],
        [b(DOCK), u(GALLEY)],
        [u(GALLEY), u(WAR_GALLEY)],
        [u(WAR_GALLEY), u(GALLEON)],
        [b(DOCK), t(CAREENING)],
        [t(CAREENING), t(DRY_DOCK)],
        [b(DOCK), b(FISH_TRAP)],
        [u(FIRE_GALLEY), u(FIRE_SHIP)],
        [u(FIRE_SHIP), u(FAST_FIRE_SHIP)],
        [u(CANNON_GALLEON), u(ELITE_CANNON_GALLEON)],
        [b(WATCH_TOWER), b(GUARD_TOWER)],
        [b(GUARD_TOWER), b(KEEP)],
        [b(STONE_WALL), b(FORTIFIED_WALL)],
        [b(MONASTERY), u(MONK)],
        [b(MONASTERY), t(DEVOTION)],
        [b(MONASTERY), t(REDEMPTION)],
        [b(MONASTERY), t(ATONEMENT)],
        [b(MONASTERY), t(HERBAL_MEDICINE)],
        [b(MONASTERY), t(HERESY)],
        [b(MONASTERY), t(SANCTITY)],
        [b(MONASTERY), t(FERVOR)],
        [t(DEVOTION), t(FAITH)],
        [b(FORT), u(UNIQUE_UNIT)],
        [u(UNIQUE_UNIT), u(ELITE_UNIQUE_UNIT)],
        [b(FORT), t(UNIQUE_TECH_1)],
        [b(FORT), t(UNIQUE_TECH_2)],
        [b(FORT), t(HOARDINGS)],
        [b(FORT), t(SAPPERS)],
        [b(FORT), t(CONSCRIPTION)],
        [b(FORT), t(SPIES_TREASON)],
        [b(TOWN_CENTER), u(VILLAGER)],
        [b(TOWN_CENTER), t(FEUDAL_AGE)],
        [t(FEUDAL_AGE), t(CASTLE_AGE)],
        [t(CASTLE_AGE), t(IMPERIAL_AGE)],
        [b(TOWN_CENTER), t(LOOM)],
        [t(TOWN_WATCH), t(TOWN_PATROL)],
        [t(WHEELBARROW), t(HAND_CART)],
        [b(SIEGE_WORKSHOP), u(MANGONEL)],
        [u(MANGONEL), u(ONAGER)],
        [b(SIEGE_WORKSHOP), u(BATTERING_RAM)],
        [u(BATTERING_RAM), u(CAPPED_RAM)],
        [u(CAPPED_RAM), u(SIEGE_RAM)],
        [b(SIEGE_WORKSHOP), u(SCORPION)],
        [u(SCORPION), u(HEAVY_SCORPION)],
        [b(SIEGE_WORKSHOP), u(SIEGE_TOWER)],
        [b(BLACKSMITH), b(SIEGE_WORKSHOP)],
        [b(BLACKSMITH), t(PADDED_ARCHER_ARMOR)],
        [t(PADDED_ARCHER_ARMOR), t(LEATHER_ARCHER_ARMOR)],
        [t(LEATHER_ARCHER_ARMOR), t(RING_ARCHER_ARMOR)],
        [b(BLACKSMITH), t(FLETCHING)],
        [t(FLETCHING), t(BODKIN_ARROW)],
        [t(BODKIN_ARROW), t(BRACER)],
        [b(BLACKSMITH), t(FORGING)],
        [t(FORGING), t(IRON_CASTING)],
        [t(IRON_CASTING), t(BLAST_FURNACE)],
        [b(BLACKSMITH), t(SCALE_BARDING_ARMOR)],
        [t(SCALE_BARDING_ARMOR), t(CHAIN_BARDING_ARMOR)],
        [t(CHAIN_BARDING_ARMOR), t(PLATE_BARDING_ARMOR)],
        [b(BLACKSMITH), t(SCALE_MAIL_ARMOR)],
        [t(SCALE_MAIL_ARMOR), t(CHAIN_MAIL_ARMOR)],
        [t(CHAIN_MAIL_ARMOR), t(PLATE_MAIL_ARMOR)],
        [b(UNIVERSITY), t(MASONRY)],
        [t(MASONRY), t(ARCHITECTURE)],
        [b(UNIVERSITY), t(FORTIFIED_WALL_TECH)],
        [b(UNIVERSITY), t(BALLISTICS)],
        [b(UNIVERSITY), t(GUARD_TOWER_TECH)],
        [t(GUARD_TOWER_TECH), t(KEEP_TECH)],
        [b(UNIVERSITY), t(HEATED_SHOT)],
        [b(UNIVERSITY), t(MURDER_HOLES)],
        [b(UNIVERSITY), t(TREADMILL_CRANE)],
        [b(MINING_CAMP), t(STONE_MINING)],
        [t(STONE_MINING), t(STONE_SHAFT_MINING)],
        [b(MINING_CAMP), t(GOLD_MINING)],
        [t(GOLD_MINING), t(GOLD_SHAFT_MINING)],
        [b(LUMBER_CAMP), t(DOUBLE_BIT_AXE)],
        [t(DOUBLE_BIT_AXE), t(BOW_SAW)],
        [t(BOW_SAW), t(TWO_MAN_SAW)],
        [b(MARKET), t(CARAVAN)],
        [t(COINAGE), t(BANKING)],
        [b(MARKET), u(TRADE_CART)],
        [b(MILL), b(MARKET)],
        [b(MILL), t(HORSE_COLLAR)],
        [t(HORSE_COLLAR), t(HEAVY_PLOW)],
        [t(HEAVY_PLOW), t(CROP_ROTATION)],
        [b(MILL), b(FARM)],
        [u(LONGBOAT), u(ELITE_LONGBOAT)],
        [b(DOCK), u(LONGBOAT)],
    ];

    let connection_ids = [];
    for (let c of connections) {
        connection_ids.push([formatId(c[0]), formatId(c[1])]);
    }
    return connection_ids;
}


function getConnectionPoints(tree) {
    let points = new Map();
    for (let lane of tree.lanes) {
        for (let r of Object.keys(lane.rows)) {
            for (let caret of lane.rows[r]) {
                points.set(caret.id, {
                    x: caret.x + (caret.width / 2),
                    y: caret.y + (caret.height / 2)
                });
            }
        }
    }
    return points;
}
