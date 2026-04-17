export const landingPageData = {
  hero: {
    title: "CHAMP Toolkit: Financing Climate Action through Multilevel Governance",
    subtitle: "Helping national governments put multilevel governance into practice to align planning, financing, and delivery systems ahead of COP30."
  },
  dashboard: [
    {
      title: "CHAMP Signatories",
      value: "77",
      description: "National governments have endorsed CHAMP, representing a major share of global GDP and emissions."
    },
    {
      title: "Urban Content in NDCs",
      value: "81%",
      description: "of submitted NDCs 3.0 include well-developed urban measures, marking a massive leap from previous cycles."
    },
    {
      title: "The Climate Finance Gap",
      value: "USD 4.3T",
      description: "Cities require USD 4.3 trillion in investment annually by 2030 just for climate mitigation."
    }
  ],
  toolkitContext: [
    {
      question: "Why is this Toolkit needed?",
      points: [
        "Financing and implementation of urban climate action remain a challenge, despite NDCs increasingly recognizing the role of cities.",
        "Limited coordination between national and local governments, capacity challenges, and a USD 4.3 trillion annual financing gap to 2030 mean urban priorities are not yet translating into bankable pipelines.",
        "Existing tools and resources remain fragmented and not easily accessible to national governments."
      ]
    },
    {
      question: "What outcome will this Toolkit support?",
      points: [
        "Supports CHAMP by helping national governments put multilevel governance into practice.",
        "Aligns planning, financing, and delivery systems across all levels of government.",
        "Enables cities to be systematically integrated into national climate strategies."
      ]
    },
    {
      question: "What impact will this Toolkit support?",
      points: [
        "Empowers CHAMP countries to deliver national climate commitments at the city level—where emissions and risks are concentrated.",
        "Mobilizes finance to drive emissions reductions, strengthen resilience, and close the urban climate finance gap."
      ]
    }
  ],
  cop30Context: "The Toolkit supports CHAMP by enabling countries to deliver national climate commitments at the city level—where emissions and risks are concentrated—by mobilizing finance to drive emissions reductions, strengthen resilience, and close the urban climate finance gap.",
  champOpportunity: {
    title: "The CHAMP Opportunity for Multilevel Governance and Climate Finance",
    goal: "Introduce CHAMP and explain why multilevel governance is critical for mobilizing climate finance and implementing national climate commitments.",
    points: [
      "The CHAMP pledge and its objectives",
      "The role of cities in delivering NDCs and national climate plans",
      "The implementation gap between commitments and investment",
      "The urban climate finance gap",
      "Why multilevel governance is needed"
    ],
    caseStudy: {
      title: "Case Study: CHAMP and the emergence of multilevel climate partnerships",
      description: "Illustrate how CHAMP is creating new opportunities for collaboration between national and subnational governments."
    },
    initiatives: [
      { name: "ICLEI", title: "Guide to Collaborative Multi-level Governance", url: "https://iclei.org/" },
      { name: "GCoM", title: "Multilevel Climate Action Playbook", url: "https://www.globalcovenantofmayors.org/" },
      { name: "WRI", title: "Stronger NDCs with Cities, States & Regions", url: "https://www.wri.org/cities" },
      { name: "WRI", title: "Are 'Country Platforms' the Key to Delivering Green Growth at Scale?", url: "https://www.wri.org/cities" },
      { name: "GEF & ICLEI", title: "Unlocking the Power of MLG (forthcoming)", url: "https://iclei.org/" },
      { name: "UN-Habitat", title: "Urban Content of NDCs 3.0", url: "https://unhabitat.org/" },
      { name: "NDC Partnership", title: "Thematic Call on LT-LEDS and NDC Alignment", url: "https://ndcpartnership.org/" }
    ]
  },
  partnerships: [
    { name: "NDC Partnership", description: "Thematic Call on LT-LEDS and NDC Alignment", url: "https://ndcpartnership.org/" },
    { name: "UN-Habitat", description: "Urban Content of the NDCs Analysis", url: "https://unhabitat.org/" },
    { name: "WRI Ross Center", description: "Multi-level Governance Atlas", url: "https://www.wri.org/cities" },
    { name: "ICLEI", description: "Guide to Collaborative Multi-level Governance", url: "https://iclei.org/" }
  ]
};

export const stepsData = [
  {
    id: 1,
    title: "Assess Enabling Environments",
    goal: "Diagnose the national and subnational regulatory, fiscal, and institutional conditions required for cities to legally plan, access, and deploy climate finance.",
    unifiedContext: {
      whatIsThisStep: "This is a foundational step involving an assessment of national and subnational enabling environments to the baseline the baseline for multilevel climate action, including assessing regulatory conditions, financial architectures, policy alignment and institutional set up. This step determines whether local governments possess the authority and mandates, financial readiness, policy and institutional alignment and data infrastructure to execute climate projects.",
      barriers: [
        {
          title: "Restrictive national policies and unpredictable funding presents challenges for cities to finance long-term infrastructure",
          shortText: "National frameworks frequently restrict subnational climate action through strict borrowing limits and insufficient fiscal decentralization. Furthermore, intergovernmental transfers often lack the predictability required for local governments to conduct long-term infrastructure planning and investment.",
          expandedText: [
            "In many developing and emerging economies, the regulatory environment is heavily centralized, requiring national approval for even minor municipal borrowing. This limits the ability of local governments to act swiftly on climate priorities, forcing them to rely on ad-hoc grants or loans that do not match the scale or timeline of infrastructure lifecycles.",
            "Additionally, unpredictable intergovernmental fiscal transfers mean that cities cannot confidently forecast their budgets over multi-year periods. Without revenue certainty, it becomes nearly impossible to engage private sector investors or commit to the long-term capital investments required for transformative climate-resilient infrastructure.",
            "When cities lack fiscal autonomy and clear, predictable funding mechanisms, the burden of financing urban climate action falls entirely on the national government, creating bottlenecks and stalling critical mitigation and adaptation efforts at the local level where they are needed most."
          ]
        },
        {
          title: "National climate policies often fail to integrate local data and urban investment needs.",
          shortText: "National governments often develop climate policies targets without adequately incorporating the local data, risks, and local investment needs and implementation pathways required to execute those targets.",
           expandedText: [
            "Nationally Determined Contributions (NDCs) and other high-level climate strategies are frequently designed without comprehensive input from subnational actors. This top-down approach leads to targets that look ambitious on paper but lack grounded, actionable implementation pathways at the city level.",
            "Without integrating granular local data—such as specific municipal greenhouse gas inventories or localized climate risk and vulnerability assessments—national policies miss the true cost and scale of the interventions needed. Consequently, urban investment needs remain invisible in national budgets.",
            "This disconnect between national goal-setting and local operational reality prevents international climate finance from reaching cities. Donors and investors require data-driven, costed pipelines that clearly align with national targets, which can only be achieved if national policies are co-created using accurate municipal data."
          ]
        },
        {
          title: "Cities lack the internal financial management capacity and revenue generation needed to fund climate action, structure bankable projects and crowd in private capital",
          shortText: "Municipalities struggle with low own-source revenue generation and underdeveloped financial management practices, preventing them from structuring bankable projects or engaging in public-private partnerships.",
          expandedText: [
            "Many local governments face a chronic shortage of the technical and financial capacities required to maintain strong public financial management (PFM). Suboptimal tax collection systems and underutilized land-value capture mechanisms severely limit their own-source revenues.",
            "This financial fragility prevents municipalities from attaining the creditworthiness needed to access domestic capital markets or attract private investors. Without a solid fiscal foundation, cities are unable to effectively structure public-private partnerships (PPPs) or issue green municipal bonds.",
            "To overcome this, extensive capacity-building is required to train municipal finance officers in advanced revenue generation strategies and project preparation. Strengthening these internal capabilities is a prerequisite for moving urban climate initiatives from conceptual ideas to bankable, investment-ready assets."
          ]
        }
      ],
      opportunities: [
        {
          title: "Mapping regulatory environment can help identify opportunities to enhance local climate finance acces and fiscal autonomy and help clarify if local governments have the mandate and capacity to take on climate action.",
          shortText: "It can reveal where national frameworks restrict local mandates, guiding the reforms needed to equip cities to finance and implement climate action. Subnational governments can not only encourage greater confidence among national governments to meet climate targets but also enhance the credibility of the NDCs themselves.",
          expandedText: [
            "A comprehensive mapping of the regulatory landscape illuminates the specific legal bottlenecks holding back subnational action. By identifying exactly which laws restrict municipal borrowing or limit public-private partnerships, national governments can target high-impact legislative reforms.",
            "These targeted reforms can empower cities with improved fiscal autonomy, allowing them to legally access external financing and enter into direct agreements with development banks. This shift effectively decentralizes climate implementation, accelerating action.",
            "When cities act with clear mandates and financial capacity, they bolster the overall credibility of the nation's climate commitments. A strong enabling environment assures international partners that the country has a viable, legally sound pathway to execute its NDCs at the local level."
          ]
        },
        {
          title: "Evaluating the financial architecture can help streamline funding and financing responsibilities across levels of government.",
          shortText: "It can help identify exactly how national governments can support subnationals through grants, transfers, and guarantees and actions, improve subnational fiscal capacities and creditworthiness.",
          expandedText: [
            "A thorough evaluation of the financial architecture uncovers inefficiencies and misalignments in how climate funds flow from national treasuries to municipal accounts. Diagnosing these pathways is essential to designing more direct, effective funding mechanisms.",
            "By understanding the fiscal realities of subnational governments, national ministries can strategically deploy tools like sovereign guarantees, performance-based grants, and dedicated climate-transfer funds. This targeted support directly addresses local shortfalls and incentivizes green investments.",
            "Ultimately, streamlining financial responsibilities ensures that resources reach the frontlines of climate action quickly. It provides municipalities with the fiscal certainty they need to build internal creditworthiness and confidently engage with private sector climate financiers."
          ]
        },
        {
          title: "Auditing data availability, quality and interoperability can ensure cities can conduct evidence-based planning and track local expenditures",
          shortText: "It allows national governments to equip cities with high-quality data while aggregating subnational data, policies and investment needs to inform national NDCs and associated investment needs.",
          expandedText: [
            "Conducting a rigorous audit of climate data infrastructure is critical. It determines whether cities have access to reliable geospatial tools, emissions tracking software, and vulnerability diagnostics necessary to plan effective interventions.",
            "When data availability and quality are improved, cities can transition from ad-hoc projects to evidence-based, systemic climate planning. Local leaders can accurately track green expenditures, measure the impact of their policies, and adjust strategies based on real-time feedback.",
            "Furthermore, harmonized and interoperable data systems allow national governments to aggregate local progress effortlessly. This unified dataset is invaluable for reporting on international commitments, updating NDCs with credible urban metrics, and attracting large-scale climate funds."
          ]
        },
        {
          title: "Diagnosing coordination gaps can establish the baseline needed to formalize institutional setups needed to support urban-inclusive policies, investment planning, pipelines and capital mobilization",
          shortText: "This alignment enables governments to develop integrated climate policies, identify urban-inclusive NDC investment needs, and support cities in accessing technical assistance to develop pipelines as well as crowd in external sources of finance, including the private sector",
          expandedText: [
            "Identifying breakdowns in vertical and horizontal governmental coordination is the first step toward building a cohesive multilevel governance framework. Diagnosing these gaps reveals exactly where institutional setups are failing to integrate city voices into national strategy.",
            "Armed with this diagnosis, countries can establish formalized, mandated coordination bodies—such as Joint Task Forces or Inter-Ministerial Committees—that permanently bridge the gap between national finance ministries and mayoral offices.",
            "This structural alignment is transformative. It allows for seamless joint investment planning, enabling cities to access targeted project preparation facilities, package their urban climate needs into robust pipelines, and present a united, investable front to private sector capital markets."
          ]
        }
      ],
      resources: [
        { name: "CCFLA", title: "State of Cities Climate Finance", url: "https://citiesclimatefinance.org/" },
        { name: "C40 Cities", title: "Climate Action Planning Guide", url: "https://www.c40.org/" },
        { name: "WRI", title: "Stronger NDCs with Cities, States & Regions", url: "https://www.wri.org/cities" },
        { name: "GCoM", title: "Multilevel Climate Action Playbook", url: "https://www.globalcovenantofmayors.org/" }
      ]
    },
    pathways: [
      {
        name: "Enabling Environment Diagnostics",
        what: "Standardized assessment mechanisms used to evaluate the legal, institutional, and financial environments governing subnational climate action.",
        howItWorks: "Diagnostics identify specific regulatory barriers (e.g., a city’s inability to issue green bonds) and propose targeted legislative reforms to align national and local systems.",
        howToImplement: "Deploy open-source diagnostic frameworks to establish a national baseline of municipal creditworthiness and sovereign authority, fulfilling the CHAMP 'Consult' mandate.",
        frameworks: [
          { name: "National EFC Assessment Tool", link: "https://climatecities.org/" },
          { name: "Subnational EFC Assessment Tool", link: "https://climatecities.org/" }
        ],
        caseStudies: [
          { title: "National implementation in India", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80", link: "#" },
          { title: "Subnational implementation in Coimbatore, India", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", link: "#" }
        ],
        partners: [
          { name: "CCFLA", link: "https://climatecities.org/" },
          { name: "World Bank", link: "https://www.worldbank.org/" }
        ]
      }
    ],
    recommendations: [
      {
        actor: "National Governments",
        points: [
          "Conduct comprehensive assessments of the national enabling framework conditions (EFCs) using standardized tools to map fiscal decentralization, intergovernmental transfers, and subnational borrowing capacity.",
          "Establish a national mechanism for centralized climate data reporting that requires and supports subnational governments to conduct regular GHG inventories and climate risk assessments.",
          "Define the subnational climate finance gap and formally integrate subnational investment needs into Nationally Determined Contributions (NDCs) and national development plans."
        ]
      },
      {
        actor: "Cities & Subnationals",
        points: [
          "Undertake a detailed self-assessment of subnational enabling framework conditions (EFCs) to evaluate local climate policy, revenue mobilization potential, and creditworthiness constraints.",
          "Develop localized, data-driven climate action plans (CAPs) that include transparent GHG emissions inventories and comprehensive climate vulnerability/risk assessments.",
          "Establish data-sharing partnerships with local research centers and universities to strengthen the evidence base for urban climate infrastructure project preparation."
        ]
      },
      {
        actor: "International Partners",
        points: [
          "Provide targeted technical assistance and viability gap funding to help national and subnational governments diagnose their enabling environments and prepare bankable climate project pipelines.",
          "Support the development of country-led platforms that coordinate multi-stakeholder climate assessments and harmonize subnational climate policy with international financing requirements.",
          "Finance the deployment of digitalized, integrated climate data systems to improve the quality, transparency, and accuracy (TACCC principles) of subnational climate reporting."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Institutionalize MLG and Investment Planning",
    goal: "Establish formal governance architectures and conduct the financial planning required to systematically integrate cities into national climate strategies.",
    unifiedContext: {
      whatIsThisStep: "This step focuses on creating structured, long-term governance agreements between national and local governments and establishing financial pathways. It transitions away from ad-hoc relationships toward permanent networks of cooperation, allowing for precise costing of climate action plans and inclusive network-based planning.",
      barriers: [
        {
          title: "National climate policies often fail to explicitly quantify subnational financial requirements.",
          shortText: "Many Nationally Determined Contributions (NDCs) lack the vital urban content required to accurately define the cost of local implementation.",
          expandedText: [
            "As highlighted by UN-Habitat's analysis, while numerous countries have endorsed CHAMP, many still feature low, moderate, or zero urban content in their commitments. This leads to high-level goals without funding realities attached.",
            "Without bottom-up aggregation of Local Climate Action Plans (LCAPs), national ministries cannot translate overarching climate targets into specific capital expenditure (CapEx) and operational expenditure (OpEx) requirements for cities.",
            "Failing to embed these quantified urban needs means National Development Plans and NDCs lack clear, costed investment signals, severely hindering the ability to mobilize finance or allocate sovereign budgets effectively."
          ]
        },
        {
          title: "Ad-hoc committees and fragmented national-local coordination mechanisms halt progress.",
          shortText: "Bridging the gap between national ministries and city halls requires permanent, funded coordination structures rather than temporary, ad-hoc committees.",
          expandedText: [
            "Limited coordination between national and local governments is a primary reason why urban priorities fail to translate into investments. Operating with temporary working groups ensures that institutional knowledge is routinely lost and momentum stalls.",
            "Without formal National-Local Coordination Mechanisms serving as the central nervous system for climate finance delivery, efforts to align national regulatory frameworks with local realities fall apart. Navigating jurisdictional disputes becomes prolonged.",
            "Crucially, these disjointed entities often fail to include representatives from the Ministry of Finance alongside the Ministry of Environment and key mayoral leadership, meaning environmental policy remains disconnected from fiscal reality."
          ]
        }
      ],
      opportunities: [
        {
          title: "Network-based governance models integrate businesses, academia, and civil society into planning.",
          shortText: "Traditional top-down planning can be replaced by formally distributed 'Transition Arenas' or 'Climate City Contracts' that co-create investment portfolios.",
          expandedText: [
            "Network-based governance shifts the local government into the role of an orchestrator. By distributing decision-making across a wide array of stakeholders, the resulting investment plans are inherently stronger and grounded in market realities.",
            "Establishing formal 'Climate City Contracts' enables municipalities to co-create investment portfolios with local businesses, utility providers, citizen groups, and researchers. This brings external expertise and capital directly into the planning cycle.",
            "This method ensures robust project pipelines that already have secured buy-in from the actors ultimately required to build, regulate, and operate the infrastructure, vastly reducing downstream implementation delays."
          ]
        },
        {
          title: "Embedding Just Transition metrics ensures social protection and community resilience.",
          shortText: "Explicitly planning for social inclusion and green jobs inside the MLG framework mitigates inequality and strengthens the long-term mandate for climate action.",
          expandedText: [
            "Climate finance is not just about reducing greenhouse gases; it is about fundamentally restructuring urban economies. If this transition isn’t managed intentionally, it risks displacing vulnerable communities and exacerbating existing divides.",
            "A Just Transition requires that the costs of workforce retraining, affordable housing preservation, and community compensation are calculated and included directly in initial climate investment plans, rather than left as unfunded afterthoughts.",
            "Institutionalizing these metrics into MLG frameworks ensures climate investments deliver immediate co-benefits to the population, securing the crucial political and social mandate required to sustain ambitious climate action over decades."
          ]
        }
      ],
      resources: [
        { name: "UN-Habitat", title: "Urban Content of NDCs Analysis", url: "https://unhabitat.org/" },
        { name: "C40 Cities", title: "NDC Ambition Handbook", url: "https://www.c40.org/" },
        { name: "GCoM", title: "Multilevel Climate Action Guide", url: "https://www.globalcovenantofmayors.org/" },
        { name: "NetZeroCities", title: "Climate City Contracts Playbook", url: "https://netzerocities.eu/" }
      ]
    },
    pathways: [
      {
        name: "Joint Commitment Architectures",
        what: "Legally or politically binding agreements between national ministries and municipal governments that formalize shared climate targets.",
        howItWorks: "National agencies and mayors sign joint operational commitments tied directly to the municipal annual budget wheel, ensuring network-based governance.",
        howToImplement: "Draft standardized commitment templates linking city mitigation targets to guaranteed national technical assistance.",
        frameworks: [
          { name: "Climate City Contract (CCC)", link: "https://en.viablecities.se/klimatkontrakt-2030" }
        ],
        caseStudies: [],
        partners: [
          { name: "Viable Cities", link: "https://en.viablecities.se/" },
          { name: "EU Cities Mission", link: "https://netzerocities.eu/" }
        ]
      },
      {
        name: "Independent Coordination Entities",
        what: "A dedicated, funded task force embedded within the National Country Platform responsible for bridging national platforms and local transition arenas.",
        howItWorks: "Serves as the permanent Subnational Technical Working Group, actively aligning policy directionality across governance levels to solve 'limited coordination'.",
        howToImplement: "Charter a permanent coordination secretariat within the national climate governance structure.",
        frameworks: [
          { name: "Viable Cities Coordination Team", link: "https://en.viablecities.se/" }
        ],
        caseStudies: [],
        partners: []
      },
      {
        name: "Subnational Investment Planning",
        what: "The methodical process of costing out Local Climate Action Plans (LCAPs) and identifying funding gaps across municipal departments.",
        howItWorks: "Translates the political joint commitments into measurable, sector-specific capital portfolios ready for NDC integration.",
        howToImplement: "Deploy capital expenditure forecasting tools tailored specifically for municipal finance departments.",
        frameworks: [
          { name: "CCC Investment Planning Phase", link: "https://en.viablecities.se/klimatkontrakt-2030" }
        ],
        caseStudies: [],
        partners: [
          { name: "C40", link: "https://www.c40.org/" },
          { name: "ICLEI", link: "https://iclei.org/" }
        ]
      }
    ],
    recommendations: [
      {
        actor: "National Governments",
        points: [
          "Benchmark the level of urban content in the current NDC against UN-Habitat analysis.",
          "Establish a permanent National-Local Coordination Mechanism with statutory authority.",
          "Integrate quantified municipal capital expenditure needs directly into NDC 3.0 investment plans."
        ]
      },
      {
        actor: "Cities & Subnationals",
        points: [
          "Form cross-departmental climate task forces to act as a single counterpart for national agreements.",
          "Execute the internal costing of Local Climate Action Plans (LCAPs).",
          "Engage local businesses and civil society through network-based governance models."
        ]
      },
      {
        actor: "International Partners",
        points: [
          "Support countries through the NDC Partnership's Thematic Call on LT-LEDS and NDC Alignment.",
          "Ensure urban-related sector officials are assigned directly to the national Coordination Entity.",
          "Provide systemic guidance for subnational investment planning."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Build Urban Climate Investment Pipelines",
    goal: "Translate completed investment plans into standardized, structured, and consolidated national pipelines ready for market entry.",
    unifiedContext: {
      whatIsThisStep: "This step bridges the gap between high-level investment plans and actual market investment. It focuses on utilizing Project Preparation Facilities (PPFs) to engineer bankable projects, aggregating those projects to meet institutional investor ticket sizes, and applying strict green taxonomies to prevent greenwashing.",
      barriers: [
        {
          title: "High-level urban priorities frequently fail to translate into bankable, structured financial assets.",
          shortText: "A massive funding gap exists because early-stage, high-risk capital isn't available to fund the crucial feasibility and financial modeling needed to structure projects.",
          expandedText: [
            "With a USD 4.3 trillion annual urban financing gap to 2030, a core bottleneck is that municipal climate concepts rarely mature into 'bankable' pipelines. Designing these assets is a rigorous process requiring specialized financial engineering.",
            "This process requires significant early-stage funding (grants) to cover feasibility studies, environmental impact assessments, legal structuring, and specialized financial modeling. Often, subnational governments lack both the budget and the technical capacity for this phase.",
            "Without robust Project Preparation Facilities (PPFs) providing risk-tolerant capital, cities produce conceptual plans that look good on paper but fail to meet the stringent risk-return profiles and documentation demanded by institutional investors and commercial banks."
          ]
        },
        {
          title: "Individual municipal projects are too small to attract large-scale institutional capital.",
          shortText: "Institutional investors require large investment ticket sizes, meaning localized projects like a single solar array face a severe 'ticket-size deficit'.",
          expandedText: [
            "Institutional investors, such as pension funds and sovereign wealth funds, typically seek investment ticket sizes exceeding $50 million to $100 million to offset transaction costs and administrative overhead. They cannot underwrite hundreds of tiny projects.",
            "Individual municipal interventions—such as a bike lane extension, a single school's solar array, or a localized drainage upgrade—are far too small to attract this level of capital. This structural mismatch leaves many vital projects unfunded.",
            "Without active intervention to bundle these initiatives, the climate finance market remains structurally misaligned with the localized nature of urban climate implementation."
          ]
        }
      ],
      opportunities: [
        {
          title: "Project Preparation Facilities (PPFs) de-risk projects through technical assistance and grant funding.",
          shortText: "Providing early-stage funding to mature projects results in standardized, de-risked prospectuses that meet global banking standards.",
          expandedText: [
            "By establishing or partnering with strong Project Preparation Facilities, national and local governments can inject vital technical assistance into early-stage ideas. PPFs act as an incubator for climate infrastructure.",
            "This targeted support provides the financial engineering necessary to navigate legal risks and clarify revenue models. The outcome is a standardized, de-risked project prospectus ready for the open market.",
            "Ultimately, properly capitalized PPFs allow cities to overcome the initial hurdle of project origination, transforming their ambitious climate action plans into certified, pipeline-ready assets that attract serious MDB and private sector interest."
          ]
        },
        {
          title: "National Aggregation Platforms bundle subnational projects to achieve essential economies of scale.",
          shortText: "Pooling multiple small-scale urban projects into a massive sovereign or sub-sovereign portfolio makes them accessible to institutional debt and green bond markets.",
          expandedText: [
            "To bridge the 'ticket-size deficit', national governments can establish aggregation platforms. These mechanisms physically combine multiple small-scale urban projects from municipalities across the country into a single, massive financial package.",
            "Integrating urban pipelines into National Climate Investment Platforms allows governments to achieve the volume necessary to issue aggregated green municipal bonds or secure multi-hundred-million dollar loans from Multilateral Development Banks (MDBs).",
            "This aggregation fulfills the core promise of multilevel governance by linking local needs to national scale, providing municipalities access to global capital markets that they could never enter independently."
          ]
        },
        {
          title: "National Climate Taxonomies standardize pipelines and eliminate greenwashing risks.",
          shortText: "Establishing strict technical screening criteria ensures that all aggregated infrastructure genuinely delivers climate aligned impacts.",
          expandedText: [
            "For an aggregated pipeline to be credible to sophisticated international markets, investors must trust that the underlying municipal projects genuinely deliver the promised emissions reductions or resilience gains.",
            "Developing and enforcing a National Climate Taxonomy provides a unified classification system. It sets strict, standardized technical screening criteria for various infrastructure sectors, ensuring every project uses the same climate accounting.",
            "When municipalities use this centralized taxonomy to tag and structure their projects, it provides total transparency, eliminates greenwashing risks, and allows investors to easily compare portfolios. It is the absolute prerequisite for securing certified green bond status."
          ]
        }
      ],
      resources: [
        { name: "CCFLA", title: "The Role of Project Preparation Facilities", url: "https://climatecities.org/" },
        { name: "World Bank", title: "Aggregating Urban Climate Finance", url: "https://www.worldbank.org/" },
        { name: "Climate Bonds Initiative", title: "Global Green Taxonomy Development", url: "https://www.climatebonds.net/" }
      ]
    },
    pathways: [
      {
        name: "Pipeline Coordination and Project Preparation",
        what: "Facilities providing tailored technical and financial engineering necessary to structure urban projects for market entry.",
        howItWorks: "National PPFs provide early-stage project development capital to mature the standardized pipeline, turning urban priorities into bankable assets.",
        howToImplement: "Capitalize national PPFs through sovereign budgets to support Tier 2 and Tier 3 cities.",
        frameworks: [
          { name: "CCFLA PPF Connector", link: "https://climatecities.org/" }
        ],
        caseStudies: [],
        partners: [
          { name: "MDBs", link: "https://www.worldbank.org/" },
          { name: "Regional Development Banks", link: "https://www.adb.org/" }
        ]
      },
      {
        name: "National Pipeline Aggregation Frameworks",
        what: "The operational mechanism that physically bundles subnational projects to match the economies of scale required by large investors.",
        howItWorks: "Executes supply- and demand-side aggregation by combining the structured projects emerging from the PPFs into a unified sovereign portfolio.",
        howToImplement: "Create a centralized digital registry managed by the national platform where municipalities submit capital expenditures for bundling.",
        frameworks: [
          { name: "Urban-Inclusive Country Platform", link: "https://www.undp.org/" }
        ],
        caseStudies: [],
        partners: [
          { name: "UNDP", link: "https://www.undp.org/" },
          { name: "National Ministries of Finance", link: "#" }
        ]
      },
      {
        name: "Climate-Aligned Taxonomies and GHG Standardization",
        what: "Classification systems and standardized climate calculations defining which local infrastructure qualifies as climate-aligned.",
        howItWorks: "Local project definitions and emissions data are mapped directly to national or MDB taxonomies, acting as the absolute prerequisite for financial securitization.",
        howToImplement: "National ministries issue mandatory taxonomy guidelines for all subnational projects.",
        frameworks: [
          { name: "Climate Bonds Taxonomy", link: "https://www.climatebonds.net/" }
        ],
        caseStudies: [],
        partners: [
          { name: "CBI", link: "https://www.climatebonds.net/" }
        ]
      }
    ],
    recommendations: [
      {
        actor: "National Governments",
        points: [
          "Establish and capitalize a National Project Preparation Facility (PPF) accessible to municipalities.",
          "Develop a National Climate Taxonomy to standardize what qualifies as a green urban investment.",
          "Create a National Climate Investment Platform to aggregate small-scale urban projects into large portfolios."
        ]
      },
      {
        actor: "Cities & Subnationals",
        points: [
          "Audit existing municipal capital improvement plans and extract climate-relevant projects.",
          "Utilize the national taxonomy to tag and standardize all local infrastructure proposals.",
          "Submit structured projects to the national aggregation platform."
        ]
      },
      {
        actor: "International Partners",
        points: [
          "Shift capital away from isolated pilot projects toward comprehensive PPF grants.",
          "Assist national governments in aligning their domestic taxonomies with global standards.",
          "Provide financial engineering at scale to mature the standardized pipeline."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Mobilize Finance, De-risk Investment and Shape Markets",
    goal: "Deploy sequential capital mechanisms to test solutions, de-risk large-scale investments, and utilize municipal purchasing power to align regional markets.",
    unifiedContext: {
      whatIsThisStep: "This step moves from planning to execution. It covers how governments can deploy catalytic grants to prove new solutions, use sovereign backing and development banks to issue de-risking instruments, and finally, how cities can leverage their massive procurement budgets to force suppliers into adopting low-carbon practices.",
      barriers: [
        {
          title: "Municipalities lack investment-grade credit ratings, effectively locking them out of capital markets.",
          shortText: "Most cities in developing and emerging economies face severe structural credit barriers, preventing them from securing affordable interest rates or direct loans.",
          expandedText: [
            "The vast majority of municipalities in developing and emerging economies do not possess investment-grade credit ratings. They often suffer from poor historical revenue collection, opaque accounting practices, and legal restrictions on their ability to hold debt.",
            "This reality prevents them from borrowing directly from domestic or international capital markets. Even when they can secure loans, the risk premiums drive interest rates so high that climate infrastructure projects become financially unviable.",
            "Without external guarantees or sophisticated credit enhancement mechanisms, perfectly designed and crucial urban resilience projects will collapse at the financing stage, stalled by perceived risk."
          ]
        },
        {
          title: "Unproven urban climate technologies and operational models struggle to secure commercial debt.",
          shortText: "Commercial banks and institutional investors require guaranteed 'proof of concept' before deploying large-scale capital into new green technologies.",
          expandedText: [
            "Closing the USD 4.3 trillion gap relies on deploying novel technologies—like advanced smart grids, innovative district heating, or new zero-emission transit solutions. However, these are often unproven in localized, real-world municipal environments.",
            "Commercial banks and private investors are highly risk-averse. They will not finance the first iteration of a new urban climate solution; they require explicit proof of concept, guaranteed revenue models, and mitigated operational risk.",
            "If early-stage, risk-absorbing capital cannot be found to test these untested operational models, cities are forced to rely on outdated, carbon-intensive legacy infrastructure, stalling the technological leap forward required by NDCs."
          ]
        }
      ],
      opportunities: [
        {
          title: "Deploying de-risking instruments via National Development Banks bypasses local credit barriers.",
          shortText: "Sovereign guarantees, first-loss tranches, and local currency facilities artificially lower the perceived risk of municipal lending, crowding in private capital.",
          expandedText: [
            "To circumvent local credit bottlenecks, national governments and international partners must deploy targeted de-risking instruments. This involves using sovereign financial weight to backstop subnational activity.",
            "By utilizing National Development Banks (NDBs) as financial intermediaries, countries can issue sovereign guarantees, absorb the highest risk portions of debt (first-loss tranches), and provide specialized local currency lending that protects cities from exchange rate volatility.",
            "These mechanisms artificially lower the perceived risk of urban climate projects to a level palatable for private commercial banks, crowding in private capital to support the CHAMP 'NDC Investment' agenda."
          ]
        },
        {
          title: "Catalytic (grant) capital absorbs initial risk and provides a pipeline graduation pathway.",
          shortText: "Seed funding allows municipalities to run pilot programs and test technological viability before entering traditional debt financing.",
          expandedText: [
            "Catalytic capital—highly concessional loans or outright grants—is essential to test untested climate solutions. It actively absorbs the initial risk of failure that commercial markets avoid.",
            "This early-stage funding empowers municipalities to confidently run pilot programs, iterate on operational models, and refine revenue collection methods without facing the threat of immediate default on commercial debt.",
            "Once a 'System Demonstrator' or pilot program proves its technical and economic viability, it graduates from catalytic funding and becomes eligible to be rolled into aggregated portfolios for traditional, large-scale debt financing."
          ]
        },
        {
          title: "Aggregated municipal procurement acts as a massive market shaper for low-carbon supply chains.",
          shortText: "When cities pool their purchasing power and mandate strict green standards, they provide suppliers the financial volume needed to decarbonize.",
          expandedText: [
            "Municipalities collectively represent massive consumers of goods, materials, and services. By strategically leveraging this unified purchasing power through green public procurement policies, cities can act as aggressive 'market shapers'.",
            "When multiple cities organize into procurement cohorts and mandate strict low-carbon standards in their tenders (e.g., for concrete, transport vehicles, or energy), they create a guaranteed, large-scale demand signal in the regional economy.",
            "This immediate purchasing volume provides suppliers with the irrefutable financial certainty they need to justify overhauling their own operations, forcefully decarbonizing local supply chains from the top down."
          ]
        }
      ],
      resources: [
        { name: "World Bank", title: "De-risking Subnational Climate Finance", url: "https://www.worldbank.org/" },
        { name: "WEF", title: "First Movers' Green Public Procurement", url: "https://www.weforum.org/" },
        { name: "Viable Cities", title: "Catalytic Finance for Urban Innovation", url: "https://en.viablecities.se/" }
      ]
    },
    pathways: [
      {
        name: "Integrated Climate Investment Models",
        what: "Financial structures that deploy concessional capital, blended finance, and guarantees to fund the tested urban climate portfolios.",
        howItWorks: "Leverages National Development Banks (NDBs) and local commercial institutions as intermediaries to deploy local currency instruments that offset municipal creditworthiness constraints.",
        howToImplement: "Establish a sovereign-backed viability fund channeled through an NDB.",
        frameworks: [
          { name: "Viability Fund and LCI Framework", link: "#" }
        ],
        caseStudies: [],
        partners: [
          { name: "NDBs", link: "#" }
        ]
      },
      {
        name: "Standardized Grant Call Frameworks",
        what: "Structured mechanisms for deploying seed/grant funding to municipalities to pilot new technologies or operational models.",
        howItWorks: "National funders issue grant calls to cities to test systemic interventions, proving technical viability and finance readiness before debt is introduced.",
        howToImplement: "Design grant criteria that explicitly measure a local government's capacity to scale the pilot into a full infrastructure project.",
        frameworks: [
          { name: "System Demonstrators Model", link: "https://en.viablecities.se/" }
        ],
        caseStudies: [],
        partners: [
          { name: "Viable Cities", link: "https://en.viablecities.se/" },
          { name: "GEF", link: "https://www.thegef.org/" }
        ]
      },
      {
        name: "Intra-City Aggregated Procurement",
        what: "Mechanisms that pool purchasing demand across municipal departments and multiple cities to mandate low-carbon standards.",
        howItWorks: "Cities aggregate demand for energy, logistics, or materials, providing suppliers the guaranteed volume needed to justify decarbonizing their operations.",
        howToImplement: "National governments anchor procurement cohorts to maximize market leverage.",
        frameworks: [
          { name: "First Mover Cities (FMC) National Offer", link: "https://www.weforum.org/" }
        ],
        caseStudies: [],
        partners: [
          { name: "WEF", link: "https://www.weforum.org/" }
        ]
      }
    ],
    recommendations: [
      {
        actor: "National Governments",
        points: [
          "Identify new or existing multilateral and bilateral funds that can be made available to subnational actors.",
          "Capitalize the first-loss tranches of Integrated Climate Investment Models via NDBs.",
          "Anchor national procurement cohorts to maximize market leverage."
        ]
      },
      {
        actor: "Cities & Subnationals",
        points: [
          "Consolidate departmental procurement budgets to issue aggregated, low-carbon tenders.",
          "Coordinate with neighboring municipalities to pool purchasing power.",
          "Utilize grant funding strictly for pilot projects with a clear pathway to commercial scale."
        ]
      },
      {
        actor: "International Partners",
        points: [
          "Work with MDBs and IFIs to enhance and expand the availability of subnational funds.",
          "Deploy sophisticated de-risking instruments, including sub-sovereign guarantees.",
          "Crowd in commercial private investment through national intermediaries."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Scale and Enhance Multilevel Climate Investment Systems",
    goal: "Leverage data tracking frameworks, peer networks, and global partnerships to scale successful investment models and ensure continuous implementation.",
    unifiedContext: {
      whatIsThisStep: "This final step reflects the continuous nature of Multilevel Governance. It involves utilizing granular data for rigorous Monitoring & Evaluation (M&E) to update climate targets, scaling lateral peer-to-peer networks to cross-pollinate successful strategies between cities, and actively engaging international support to circumvent limited sovereign administrative capacity.",
      barriers: [
        {
          title: "Implementing massive Multilevel Governance systems often exceeds domestic sovereign administrative capacity.",
          shortText: "Even well-resourced national governments frequently lack the highly specialized financial engineering expertise required to manage multi-billion dollar aggregation platforms.",
          expandedText: [
            "Deploying a comprehensive Multilevel Governance framework—one that seamlessly orchestrates national taxonomies, municipal pipelines, and global debt issuance—is a monumentally complex administrative undertaking.",
            "Often, national finance and environment ministries are understaffed or lack the niche, technical background in sub-sovereign financial engineering required to manage large-scale climate aggregation platforms and digital asset registries.",
            "Attempting to scale these systems purely internally can result in bottlenecks, inefficient capital deployment, and missed opportunities. Recognizing the fundamental limit of domestic sovereign capacity is critical to avoiding stalled implementation."
          ]
        },
        {
          title: "Inadequate data tracking leads to stagnant policies and invisible municipal performance.",
          shortText: "Without granular, digitized Monitoring and Evaluation (M&E) systems, national governments cannot track capital absorption, adjust policies, or fulfil Voluntary Review pledges.",
          expandedText: [
            "A scalable MLG system quickly degrades without real-time, accurate feedback loops. Often, climate project tracking relies on disjointed spreadsheets or delayed, annualized reporting that obscures actual municipal performance.",
            "Without robust, digitized M&E frameworks, the National Coordination Entity cannot identify localized bottlenecks, track where capital is being successfully absorbed, or determine the true greenhouse gas yield of their investments.",
            "This lack of granular data actively prevents the national government from fulfilling the CHAMP 'Voluntary Review' pledge and submitting accurate Voluntary National Reviews (VNRs) or Biennial Transparency Reports (BTRs)."
          ]
        }
      ],
      opportunities: [
        {
          title: "Integrating international technical assistance provides crucial financial engineering and standardization.",
          shortText: "Actively partnering with Multilateral Development Banks (MDBs) and UN agencies ensures domestic systems meet the stringent expectations of global investors.",
          expandedText: [
            "To overcome sovereign administrative limits, national governments must actively seek out and formally integrate international technical assistance from MDBs, IFIs, and specialized climate finance networks.",
            "This international support injects specialized financial engineering expertise directly into the National Coordination Entity. It helps standardize domestic taxonomy and aggregation practices to align perfectly with global investor expectations.",
            "Leveraging global partnerships ensures that the national MLG system architecture is structurally sound, universally trusted, and robust enough to handle the inflow of billions of dollars in international capital."
          ]
        },
        {
          title: "Data-Driven M&E systems enable iterative policy and sharpens subsequent joint commitments.",
          shortText: "Using digital tracking allows the MLG framework to operate as a continuous loop, where the performance data from one fiscal year rewrites the policies of the next.",
          expandedText: [
            "Implementing standardized M&E tracking at the municipal level provides high-fidelity, real-time insights into both climate impact and financial performance. It reveals exactly what works and what fails in the field.",
            "Multilevel Governance is not a one-off project; it is an iterative cycle. Each year, the National-Local Coordination Mechanism must review this performance data to identify successes and friction points.",
            "Driven by the evidence, Joint Commitments (like Climate City Contracts) are renegotiated and sharpened annually. This continuous loop ensures the policy framework remains adaptive, heavily data-driven, and permanently evolving."
          ]
        },
        {
          title: "Lateral peer-to-peer networks rapidly scale locally proven urban climate solutions horizontally.",
          shortText: "By organizing municipalities into peer cohorts, a successful pilot in one city can bypass national bureaucracy and immediately be replicated by others.",
          expandedText: [
            "While vertical integration (national to local) is crucial, horizontal integration (local to local) is the key to accelerated scaling. Cities face similar operational hurdles and can learn from each other more quickly than they can from central mandates.",
            "Facilitating lateral peer-to-peer cohorts or 'transition labs' allows a municipality that successfully implements a complex intervention (e.g., district cooling) to immediately share its operational blueprint.",
            "This network effect expands the transition arena beyond isolated verticals, allowing proven solutions to cascade rapidly across the country, exponentially scaling the national transition timeline."
          ]
        }
      ],
      resources: [
        { name: "UNDP", title: "Scaling Climate Finance", url: "https://www.undp.org/" },
        { name: "GCoM", title: "Data for Urban Climate Action", url: "https://www.globalcovenantofmayors.org/" },
        { name: "Viable Cities", title: "Iterative Climate Governance", url: "https://en.viablecities.se/" }
      ]
    },
    pathways: [
      {
        name: "Data-Driven M&E and Annual Iteration",
        what: "Standardized digital tracking systems that monitor capital absorption and project yield at the municipal level.",
        howItWorks: "Feeds directly back to the Coordination Entity to trigger the annual renewal and sharpening of the Joint Commitments, supporting Voluntary National Reviews.",
        howToImplement: "Integrate municipal capital absorption metrics into the sovereign review process and Biennial Transparency Reports (BTR).",
        frameworks: [
          { name: "CCC M&E Framework", link: "https://en.viablecities.se/klimatkontrakt-2030" }
        ],
        caseStudies: [],
        partners: []
      },
      {
        name: "Global Matchmaking Hubs & High-Level Dialogues",
        what: "Forums and digital infrastructure connecting the aggregated sovereign portfolios with global capital and sharing best practices.",
        howItWorks: "Provides explicit technical assistance and matchmaking support for subnational governments to engage systematically with international private sector investors and share progress at COP events.",
        howToImplement: "Integrate domestic project data into international climate finance registries and participate in CHAMP High-Level Dialogues.",
        frameworks: [
          { name: "CCFLA Local Hubs", link: "https://climatecities.org/" }
        ],
        caseStudies: [],
        partners: [
          { name: "CCFLA", link: "https://climatecities.org/" }
        ]
      },
      {
        name: "Lateral Peer-to-Peer Commitments",
        what: "Lateral agreements where cities commit to shared operational targets, promoting peer-to-peer exchanges of experiences.",
        howItWorks: "Groups municipalities into cohorts to jointly test and scale solutions, expanding the transition arena beyond isolated national-local verticals.",
        howToImplement: "Facilitate regular municipal transition labs, scaling the Viable Cities Joint Commitments model to expand horizontal learning.",
        frameworks: [
          { name: "Viable Cities Joint Commitments", link: "https://en.viablecities.se/" }
        ],
        caseStudies: [],
        partners: []
      }
    ],
    recommendations: [
      {
        actor: "National Governments",
        points: [
          "Publish transparent national processes for collaboration through Voluntary National Review (VNR) or Biennial Transparency Reports (BTR).",
          "Share progress, challenges, and best practices at the CHAMP High-Level Dialogues.",
          "Implement standardized digital M&E tracking systems to monitor capital absorption at the municipal level."
        ]
      },
      {
        actor: "Cities & Subnationals",
        points: [
          "Actively participate in lateral, peer-to-peer cohorts to share implementation data.",
          "Provide accurate, timely data to support national VNR and BTR submissions.",
          "Exchange operational strategies with other municipalities to scale successful models."
        ]
      },
      {
        actor: "International Partners",
        points: [
          "Fund and facilitate digital matchmaking hubs to connect sovereign portfolios with global capital.",
          "Support the organization of CHAMP High-Level Dialogues ahead of COP30.",
          "Engage systematically with international private equity to close the USD 4.3T financing gap."
        ]
      }
    ]
  }
];
