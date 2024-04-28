const skillCW = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "J",
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  "H",
  30,
  "A",
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  "T",
  51,
  "V",
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  "C",
  69,
  70,
  "M",
  72,
  "A",
  74,
  75,
  76,
  "R",
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  "R",
  86,
  87,
  88,
  "S",
  "K",
  "I",
  "L",
  "L",
  "S",
  95,
  96,
  97,
  "E",
  99,
  100,
  101,
  "G",
  103,
  104,
  "N",
  "E",
  "X",
  "T",
  "J",
  "S",
  111,
  112,
  113,
  114,
  "C",
  116,
  117,
  "T",
  "A",
  "I",
  "L",
  "W",
  "I",
  "N",
  "D",
  126,
  "A",
  128,
  129,
  130,
  131,
  132,
  133,
  134,
  135,
  "R",
  137,
  138,
  139,
  "C",
  141,
  142,
  143,
  "T",
  145,
  146,
  147,
  "C",
  149,
  150,
  151,
  152,
  153,
  154,
  155,
  156,
  "I",
  158,
  159,
  160,
  "T",
  162,
  163,
  164,
  165,
  166,
  167,
  168,
  "T",
  170,
  171,
  172,
  173,
  174,
  175,
  "T",
  "Y",
  "P",
  "E",
  "S",
  "C",
  "R",
  "I",
  "P",
  "T",
  186,
  187,
  188,
  189,
  190,
  191,
  192,
  193,
  194,
  195,
  196,
  197,
  198,
  "T",
  200,
  201,
  202,
  "O",
  204,
  205,
  206,
  207,
  208,
  209,
  210,
  211,
  212,
  213,
  214,
  215,
  216,
  217,
  218,
  219,
  220,
  221,
  222,
  "M",
  "U",
  "I",
  226,
  227,
  228,
  229,
  230,
  231,
  232,
  233,
  234,
  235,
  236,
  237,
  238,
  239,
  240,
  241,
  242,
  243,
  244,
  "T",
  246,
  247,
  248,
  249,
  250,
  251,
  252,
  253,
  254,
  255,
  256,
  257,
  258,
  259,
  260,
  261,
  262,
  263,
  264,
  265,
  "E",
  267,
  268,
  269,
  270,
  271,
  272,
  273,
  274,
  275,
  276,
  277,
  278,
  279,
  280,
  281,
  282,
  283,
  284,
  285,
  286,
  "R",
  288,
  289,
  290,
  291,
  292,
  293,
];

const answercw = [
  105, 85, 106, 127, 148, 169, 107, 108, 109, 68, 110, 29, 50, 71, 176, 177, 10,
  31, 52, 73, 115, 136, 157, 178, 199, 179, 180, 118, 181, 223, 77, 98, 119,
  140, 161, 182, 203, 224, 245, 266, 287, 120, 183, 225, 121, 184, 122, 185,
  102, 123, 144, 124, 125,
];

const skillcw = [89, 90, 91, 92, 93, 94];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-lime-50 pt-[25px] px-6 text-black h-min min-h-[670px] max-w-[1000px] flex justify-center items-center overflow-y-hidden w-full bg-cover"
    >
      <div className="flex flex-col gap-10 py-6">
        <div className="grid grid-cols-21 grid-rows-14 gap-1">
          {skillCW.map((letter, index) =>
            answercw.includes(index) ? (
              <div
                key={index}
                className=" border font-medium w-8 h-8 text-lg border-gray-400 flex justify-center items-center"
              >
                {letter}
              </div>
            ) : skillcw.includes(index) ? (
              <div
                key={index}
                className=" border font-extrabold w-8 h-8 text-lg pt-0.5 border-gray-400 flex justify-center items-center"
              >
                {letter}
              </div>
            ) : (
              <div
                key={index}
                className=" flex justify-center w-8 h-8 items-center"
              ></div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
