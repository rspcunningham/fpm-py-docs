import ast
import sys
import os
import requests
from bs4 import BeautifulSoup

def extract_docstring(node):
    if isinstance(node, (ast.FunctionDef, ast.ClassDef, ast.Module)):
        docstring = ast.get_docstring(node)
        return docstring if docstring else "No docstring provided."
    return None

def parse_content(content, module_name):
    tree = ast.parse(content)
    
    markdown = f"# {module_name}\n\n"
    
    module_doc = extract_docstring(tree)
    if module_doc:
        markdown += f"{module_doc}\n\n"
    
    for node in ast.walk(tree):
        if isinstance(node, ast.ClassDef):
            markdown += f"## Class: {node.name}\n\n"
            markdown += f"```python\nclass {node.name}\n```\n\n"
            markdown += f"{extract_docstring(node)}\n\n"
            
        elif isinstance(node, ast.FunctionDef):
            markdown += f"### Function: {node.name}\n\n"
            markdown += f"```python\ndef {node.name}{ast.unparse(node.args)}\n```\n\n"
            markdown += f"{extract_docstring(node)}\n\n"
    
    return markdown

def write_markdown(content, output_file):
    with open(output_file, 'w') as file:
        file.write(content)

def fetch_github_file(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        print(f"Failed to fetch file from {url}")
        sys.exit(1)

def fetch_python_files_from_github_directory(url):
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch directory listing from {url}")
        sys.exit(1)
    
    soup = BeautifulSoup(response.text, 'html.parser')
    file_urls = []
    for link in soup.find_all('a', href=True):
        href = link['href']
        if href.endswith('.py'):
            file_urls.append(f"https://raw.githubusercontent.com{href.replace('/blob', '')}")
    
    return file_urls

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <github_directory_url>")
        sys.exit(1)
    
    github_directory_url = sys.argv[1]
    python_files = fetch_python_files_from_github_directory(github_directory_url)
    
    for file_url in python_files:
        file_name = file_url.split('/')[-1]
        module_name = file_name.replace('.py', '')
        
        file_content = fetch_github_file(file_url)
        
        markdown_content = parse_content(file_content, module_name)
        output_file = file_name.replace('.py', '.md')
        write_markdown(markdown_content, output_file)
        print(f"Markdown file generated: {output_file}")