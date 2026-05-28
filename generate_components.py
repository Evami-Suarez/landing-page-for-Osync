import re

with open("original_index.html", "r") as f:
    html = f.read()

def html_to_jsx(html_str):
    # Very basic HTML to JSX conversion
    jsx = html_str.replace('class="', 'className="')
    jsx = jsx.replace('for="', 'htmlFor="')
    jsx = jsx.replace('tabindex="', 'tabIndex="')
    # Self close img tags (some might be self closed already, so let's use regex)
    jsx = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', jsx)
    # Strip style string for simplicity or convert them to object.
    # In this specific html, I can just use regex to convert simple styles to react style objects
    # This is hard to do perfectly with regex, so I will manually fix them if needed, or use a naive approach
    
    # Actually, the user has style attributes in original_index.html from the previous step.
    # We added styles like: style="margin: 0;" -> style={{ margin: "0" }}
    def style_replacer(match):
        style_str = match.group(1)
        styles = style_str.split(';')
        react_style = []
        for s in styles:
            if ':' not in s: continue
            k, v = s.split(':', 1)
            k = k.strip()
            v = v.strip()
            # to camelCase
            parts = k.split('-')
            k = parts[0] + ''.join(x.title() for x in parts[1:])
            react_style.append(f'{k}: "{v}"')
        return 'style={{ ' + ', '.join(react_style) + ' }}'
    
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    return jsx

# Extract Navbar
nav_match = re.search(r'<div\s+data-collapse="medium".*?</div>\s*</div>\s*</div>', html, re.DOTALL)
if nav_match:
    nav_jsx = html_to_jsx(nav_match.group(0))
    with open("src/components/Navbar.jsx", "w") as f:
        f.write("export default function Navbar() {\n  return (\n" + nav_jsx + "\n  );\n}\n")

# Extract Hero
hero_match = re.search(r'<div class="section preview wf-section">.*?<div class="circle-1"></div>\s*</div>\s*</div>', html, re.DOTALL)
if hero_match:
    hero_jsx = html_to_jsx(hero_match.group(0))
    with open("src/components/Hero.jsx", "w") as f:
        f.write("export default function Hero() {\n  return (\n" + hero_jsx + "\n  );\n}\n")

# Extract About
about_match = re.search(r'<div id="About" class="section wf-section">.*?</div>\s*</div>\s*</div>\s*</div>', html, re.DOTALL)
if about_match:
    about_jsx = html_to_jsx(about_match.group(0))
    with open("src/components/About.jsx", "w") as f:
        f.write("export default function About() {\n  return (\n" + about_jsx + "\n  );\n}\n")

# Extract Problem
problem_match = re.search(r'<div id="Problem" class="section wf-section".*?</div>\s*</div>\s*</div>\s*</div>', html, re.DOTALL)
if problem_match:
    problem_jsx = html_to_jsx(problem_match.group(0))
    with open("src/components/Problem.jsx", "w") as f:
        f.write("export default function Problem() {\n  return (\n" + problem_jsx + "\n  );\n}\n")

# Extract Footer
footer_match = re.search(r'<div class="footer wf-section">.*?</div>\s*</div>\s*</div>\s*</div>', html, re.DOTALL)
if footer_match:
    footer_jsx = html_to_jsx(footer_match.group(0))
    with open("src/components/Footer.jsx", "w") as f:
        f.write("export default function Footer() {\n  return (\n" + footer_jsx + "\n  );\n}\n")

